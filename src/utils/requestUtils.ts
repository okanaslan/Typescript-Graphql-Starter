import { GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from "graphql";

export function createGraphQLPagedInput(input: GraphQLInputObjectType, name: string): GraphQLInputObjectType {
    return new GraphQLInputObjectType({
        name: name,
        fields: {
            ...input.getFields(),
            index: { type: GraphQLNonNull(GraphQLInt) },
            limit: { type: GraphQLNonNull(GraphQLInt) },
        },
    });
}
