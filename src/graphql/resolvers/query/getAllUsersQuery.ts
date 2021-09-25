import { User } from "@prisma/client";
import { GraphQLFieldConfig, GraphQLList } from "graphql";

import { IContext } from "../../../interfaces/Context";
import { IResponse } from "../../../interfaces/Response";
import { GraphQLInput } from "../../../interfaces/GraphQLInput";

import { UserType } from "../../typedefs/UserType";
import { UserController } from "../../../controllers/userController";
import { createGraphQLPagedResponse } from "../../../utils/responseUtils";
import { PaginationInput } from "../../typedefs/inputs/PaginationInput";

export const getAllUsersQuery: GraphQLFieldConfig<unknown, IContext, GraphQLInput<null>> = {
    type: createGraphQLPagedResponse(GraphQLList(UserType), "PagedUsers"),
    args: {
        pagination: {
            type: PaginationInput,
        },
    },
    resolve: async (_source, args, context, _info): Promise<IResponse<User[]>> => {
        return UserController.getAllUsersQueryResolver(context, args);
    },
};
