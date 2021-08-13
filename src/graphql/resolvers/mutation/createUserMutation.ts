import { GraphQLFieldConfig, GraphQLFieldResolver } from "graphql";
import { User } from "@prisma/client";

import { Context } from "../../../context";

import { createUser } from "../../../controllers/userController";
import { UserType } from "../../typedefs/UserType";
import { CreateUserInput } from "../../typedefs/inputs/CreateUserInput";

export const createUserMutationResolver: GraphQLFieldResolver<unknown, Context> = async (_source, { input: { name } }): Promise<User> => {
    return createUser(name);
};

export const createUserMutation: GraphQLFieldConfig<unknown, Context> = {
    type: UserType,
    args: {
        input: {
            type: CreateUserInput,
        },
    },
    resolve: createUserMutationResolver,
};
