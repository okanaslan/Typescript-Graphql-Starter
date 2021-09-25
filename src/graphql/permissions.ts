import { shield } from "graphql-shield";
import { NodeEnvironment } from "../enums/NodeEnvironment";

export const rules = shield(
    {
        Query: {
            // users: createRuleForPermission(Permission.getUser),
        },
        Mutation: {
            // createUser: createRuleForPermission(Permission.createUser),
        },
    },
    { debug: process.env["NODE_ENV"] === NodeEnvironment.local }
);
