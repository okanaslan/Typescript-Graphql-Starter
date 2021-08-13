import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from "graphql";
import { User } from "@prisma/client";
import { Context } from "../../../context";
import { getAllUsers } from "../../../controllers/userController";
import { UserType } from "../../typedefs/UserType";

export const getAllUsersQueryResolver: GraphQLFieldResolver<unknown, Context> = async (): Promise<User[]> => {
    const users = await getAllUsers();
    return users;
};

export const getAllUsersQuery: GraphQLFieldConfig<unknown, Context> = {
    type: GraphQLList(UserType),
    resolve: getAllUsersQueryResolver,
};
