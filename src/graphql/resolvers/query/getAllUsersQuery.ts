import { User } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { IContext } from "../../../interfaces/Context";
import { IResponse } from "../../../interfaces/Response";
import { GraphQLInput } from "../../../interfaces/GraphQLInput";

import { UserType } from "../../types/UserType";
import { UserController } from "../../../controllers/userController";
import { createGraphQLPagedResponse } from "../../../utils/responseUtils";
import { Pagination } from "../../types/Pagination";

export interface IGetUsersQueryFilter {
    name: string;
}

const GetUsersQueryFilter = new GraphQLInputObjectType({
    name: "GetUsersMutationInput",
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
    },
});

export interface IGetUsersMutationResponseData {
    users: User[];
}
const GetUsersQueryResponse = new GraphQLObjectType({
    name: "users",
    fields: {
        users: { type: new GraphQLList(UserType) },
    },
});

export const getAllUsersQuery: GraphQLFieldConfig<unknown, IContext, GraphQLInput<null, IGetUsersQueryFilter>> = {
    type: createGraphQLPagedResponse(GetUsersQueryResponse, "GetUsersQueryResponse"),
    args: {
        pagination: {
            type: Pagination,
        },
        filter: {
            type: GetUsersQueryFilter,
        },
    },
    resolve: async (_source, args, context, _info): Promise<IResponse<IGetUsersMutationResponseData>> => {
        return UserController.getAllUsersQueryResolver(context, args);
    },
};
