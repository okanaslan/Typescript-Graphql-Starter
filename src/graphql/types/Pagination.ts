import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from "graphql";

export const Pagination = new GraphQLInputObjectType({
    name: "Pagination",
    fields: {
        index: { type: new GraphQLNonNull(GraphQLInt) },
        limit: { type: new GraphQLNonNull(GraphQLInt) },
    },
});
