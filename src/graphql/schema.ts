import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLObjectType, GraphQLSchema, printSchema } from "graphql";

import { resolvers } from "./resolvers/resolvers";

import { getAllUsersQuery } from "./resolvers/query/getAllUsersQuery";

import { createUserMutation } from "./resolvers/mutation/createUserMutation";

export const schema = makeExecutableSchema({
    typeDefs: gql(
        printSchema(
            new GraphQLSchema({
                description: "Events microservice",
                query: new GraphQLObjectType({
                    name: "Query",
                    fields: {
                        users: getAllUsersQuery,
                    },
                }),
                mutation: new GraphQLObjectType({
                    name: "Mutation",
                    fields: {
                        createUser: createUserMutation,
                    },
                }),
            })
        )
    ),
    resolvers,
});
