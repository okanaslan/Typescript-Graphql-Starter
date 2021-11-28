import { GraphQLResolverMap } from "apollo-graphql";

import { IContext } from "../interfaces/Context";

import { getAllUsersQuery } from "./resolvers/query/getAllUsersQuery";

import { createUserMutation } from "./resolvers/mutation/createUserMutation";

export const resolvers: GraphQLResolverMap<IContext> = {
    Query: {
        users: {
            resolve: getAllUsersQuery.resolve!,
        },
    },
    Mutation: {
        createUser: {
            resolve: createUserMutation.resolve!,
        },
    },
};
