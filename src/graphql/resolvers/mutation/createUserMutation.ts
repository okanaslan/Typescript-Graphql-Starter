import { User } from "@prisma/client";
import { GraphQLFieldConfig } from "graphql";

import { IContext } from "../../../interfaces/Context";
import { IResponse } from "../../../interfaces/Response";
import { GraphQLInput } from "../../../interfaces/GraphQLInput";

import { UserType } from "../../typedefs/UserType";
import { UserController } from "../../../controllers/userController";
import { CreateUserMutationInput, ICreateUserMutationInput } from "../../typedefs/inputs/CreateUserInput";
import { createGraphQLResponse } from "../../../utils/responseUtils";

export const createUserMutation: GraphQLFieldConfig<unknown, IContext, GraphQLInput<ICreateUserMutationInput>> = {
    type: createGraphQLResponse(UserType, "CreateUser"),
    args: {
        input: {
            type: CreateUserMutationInput,
        },
    },
    resolve: async (_source, args, context, _info): Promise<IResponse<User[]>> => {
        return UserController.createUserMutationResolver(context, args);
    },
};
