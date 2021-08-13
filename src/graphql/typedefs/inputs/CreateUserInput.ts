import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

export const CreateUserInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: "CreateUserInput",
    fields: {
        name: { type: GraphQLNonNull(GraphQLString) },
    },
});
