import { Server } from "../server";

import { IContext } from "../interfaces/Context";
import { IResponse } from "../interfaces/Response";
import { GraphQLInput } from "../interfaces/GraphQLInput";
import { createErrorResponse, createResponse } from "../utils/responseUtils";

import { ICreateUserMutationInput, ICreateUserMutationResponseData } from "../graphql/resolvers/mutation/createUserMutation";
import { IGetUsersMutationResponseData, IGetUsersQueryFilter } from "../graphql/resolvers/query/getAllUsersQuery";

export class UserController {
    static getAllUsersQueryResolver = async (
        _context: IContext,
        _args?: GraphQLInput<null, IGetUsersQueryFilter>
    ): Promise<IResponse<IGetUsersMutationResponseData>> => {
        try {
            const users = await Server.prisma.user.findMany();
            return createResponse<IGetUsersMutationResponseData>({ users });
        } catch (error) {
            return createErrorResponse<IGetUsersMutationResponseData>(error);
        }
    };

    static createUserMutationResolver = async (
        _context: IContext,
        args?: GraphQLInput<ICreateUserMutationInput>
    ): Promise<IResponse<ICreateUserMutationResponseData>> => {
        try {
            const input = args!.input;
            const user = await Server.prisma.user.create({ data: { name: input!.name } });
            return createResponse<ICreateUserMutationResponseData>({ user });
        } catch (error) {
            return createErrorResponse<ICreateUserMutationResponseData>(error);
        }
    };
}
