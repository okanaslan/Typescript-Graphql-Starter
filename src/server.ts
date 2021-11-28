import { performAstCodegen } from "./utils/codegen";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { Server as httpServer } from "http";
import { schema } from "./graphql/schema";
import { rules } from "./graphql/permissions";
import { AuthUtils } from "./utils/authUtils";

export class Server {
    static prisma = new PrismaClient();
    static expressServer = express();
    static apolloServer = new ApolloServer<ExpressContext>({
        schema: applyMiddleware(schema, rules),
        context: ({ req }) => {
            const user = AuthUtils.handleAuth(req);
            return { user };
        },
        introspection: true,
    });
    static httpServer?: httpServer;

    static start = async (port?: number): Promise<void> => {
        Server.expressServer.get(`/membership/health`, (_request: Request, response: Response): void => {
            response.json({ running: true });
        });

        try {
            await performAstCodegen();
            await Server.apolloServer.start();

            Server.apolloServer.applyMiddleware({ app: Server.expressServer, path: "/graphql" });
            Server.httpServer = Server.expressServer.listen({ port: port }, () => console.info(`Membership service ready at port: ${port}`));
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    };

    static stop(done: (error?: any) => void) {
        Promise.all([Server.apolloServer.stop(), Server.prisma.$disconnect()])
            .then(() => {
                Server.httpServer?.close((error) => {
                    if (error == null) {
                        console.info("Server closed");
                        done();
                    } else {
                        console.error(error);
                        done(error);
                    }
                });
            })
            .catch((error) => {
                console.error(error);
                done(error);
            });
    }
}
