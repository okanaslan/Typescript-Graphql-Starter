import { GraphQLResolverMap } from "apollo-graphql";

import { IContext } from "../../interfaces/Context";

import { getAllUsersQuery } from "./query/getAllUsersQuery";

import { createUserMutation } from "./mutation/createUserMutation";

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
