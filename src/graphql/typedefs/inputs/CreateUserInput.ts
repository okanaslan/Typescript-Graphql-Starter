import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

export interface ICreateUserMutationInput {
    name: string;
}

export const CreateUserMutationInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: "CreateUserInput",
    fields: {
        name: { type: GraphQLNonNull(GraphQLString) },
    },
});
