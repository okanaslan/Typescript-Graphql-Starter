import { app } from "../app";
import { User } from "@prisma/client";

import { IContext } from "../interfaces/Context";
import { IResponse } from "../interfaces/Response";
import { GraphQLInput } from "../interfaces/GraphQLInput";
import { createErrorResponse, createResponse } from "../utils/responseUtils";

import { ICreateUserMutationInput } from "../graphql/typedefs/inputs/CreateUserInput";

export class UserController {
    static getAllUsersQueryResolver = async (_context: IContext, _args?: GraphQLInput<null>): Promise<IResponse<User[]>> => {
        try {
            const users = await app.prisma.user.findMany();
            return createResponse<User[]>(users);
        } catch (error) {
            return createErrorResponse<User[]>(error);
        }
    };

    static createUserMutationResolver = async (_context: IContext, _args?: GraphQLInput<ICreateUserMutationInput>): Promise<IResponse<User[]>> => {
        try {
            const users = await app.prisma.user.findMany();
            return createResponse<User[]>(users);
        } catch (error) {
            return createErrorResponse<User[]>(error);
        }
    };
}
