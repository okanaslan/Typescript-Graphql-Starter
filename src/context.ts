import { GraphQLSchema } from "graphql";
import { PrismaClient } from "@prisma/client";

export class Context {
    schema: GraphQLSchema;
    static prisma: PrismaClient = new PrismaClient();

    constructor(schema: GraphQLSchema) {
        this.schema = schema;
    }
}
