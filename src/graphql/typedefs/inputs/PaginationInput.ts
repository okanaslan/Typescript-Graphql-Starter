import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from "graphql";

export interface IPaginationInput {
    index?: number;
    limit: number;
}

export const PaginationInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: "PaginationInput",
    fields: {
        index: { type: GraphQLInt },
        limit: { type: GraphQLNonNull(GraphQLInt) },
    },
});
