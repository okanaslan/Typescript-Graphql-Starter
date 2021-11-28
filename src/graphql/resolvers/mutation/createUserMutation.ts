import { User } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { IContext } from "../../../interfaces/Context";
import { IResponse } from "../../../interfaces/Response";
import { GraphQLInput } from "../../../interfaces/GraphQLInput";

import { UserType } from "../../types/UserType";
import { UserController } from "../../../controllers/userController";
import { createGraphQLResponse } from "../../../utils/responseUtils";

export interface ICreateUserMutationInput {
    name: string;
}

const CreateUserMutationInput = new GraphQLInputObjectType({
    name: "CreateUserMutationInput",
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
    },
});

export interface ICreateUserMutationResponseData {
    user: User;
}
const CreateUserMutationResponse = new GraphQLObjectType({
    name: "CreateUser",
    fields: {
        user: { type: UserType },
    },
});

export const createUserMutation: GraphQLFieldConfig<unknown, IContext, GraphQLInput<ICreateUserMutationInput>> = {
    type: createGraphQLResponse(CreateUserMutationResponse, "CreateUserMutationResponse"),
    args: {
        input: {
            type: CreateUserMutationInput,
        },
    },
    resolve: async (_source, args, context, _info): Promise<IResponse<ICreateUserMutationResponseData>> => {
        return UserController.createUserMutationResolver(context, args);
    },
};
