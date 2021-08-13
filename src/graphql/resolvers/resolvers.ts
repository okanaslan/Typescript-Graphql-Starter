import { GraphQLResolverMap } from "apollo-graphql";

import { Context } from "../../context";

import { getAllUsersQueryResolver } from "./query/getAllUsersQuery";

import { createUserMutationResolver } from "./mutation/createUserMutation";

export const resolvers: GraphQLResolverMap<Context> = {
    Query: {
        users: {
            resolve: getAllUsersQueryResolver,
        },
    },
    Mutation: {
        createUser: {
            resolve: createUserMutationResolver,
        },
    },
};
