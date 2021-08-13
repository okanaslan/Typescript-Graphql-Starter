import { performAstCodegen } from "./utils/codegen";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql/schema";
import express, { Express, Request, Response } from "express";

import { Context } from "./context";

export class Server {
    app: Express;
    name: string;
    port: number;
    host: string;

    constructor(name: string, port: number, host?: string) {
        this.app = express();
        this.port = port;
        this.host = host ?? "http://localhost";
        this.name = name;
    }

    start = async (): Promise<void> => {
        performAstCodegen();

        this.app.get(`/${this.name}/health`, (_request: Request, response: Response): void => {
            response.json({ running: true });
        });

        try {
            const context = new Context(schema);
            const server = new ApolloServer({
                schema: schema,
                context: context,
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
