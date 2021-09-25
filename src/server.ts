import { schema } from "./graphql/schema";
import { PrismaClient } from "@prisma/client";
import { performAstCodegen } from "./utils/codegen";
import { applyMiddleware } from "graphql-middleware";
import express, { Express, Request, Response } from "express";
import { ApolloServer, ExpressContext } from "apollo-server-express";

import { AuthUtils } from "./utils/authUtils";
import { rules } from "./graphql/permissions";

export class Server {
    app: Express;
    name: string;
    port: number;
    host: string;

    prisma: PrismaClient;

    constructor(name: string, port: number, host?: string) {
        this.app = express();
        this.port = port;
        this.host = host ?? "http://localhost";
        this.name = name;

        this.prisma = new PrismaClient();
    }

    start = async (): Promise<void> => {
        performAstCodegen();

        this.app.get(`/${this.name}/health`, (_request: Request, response: Response): void => {
            response.json({ running: true });
        });

        try {
            const server = new ApolloServer<ExpressContext>({
                schema: applyMiddleware(schema, rules),
                context: ({ req }) => {
                    const user = AuthUtils.handleAuth(req);
                    return { user };
                },
                introspection: true,
            });
            await server.start();
            server.applyMiddleware({ app: this.app, path: "/graphql" });
        } catch (error) {
            console.error(error);
        }

        this.app.listen({ port: this.port }, () => console.info(`${this.name} Server ready at ${this.host}:${this.port}`));
    };
}
