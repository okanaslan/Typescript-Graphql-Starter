import { User } from "@prisma/client";
import { Context } from "../context";

export const filterUsers = async (): Promise<User[]> => {
    const users = await Context.prisma.user.findMany();
    return users;
};

export const getAllUsers = async (): Promise<User[]> => {
    const users = await Context.prisma.user.findMany();
    return users;
};

export const getUserById = async (id: number): Promise<User | null> => {
    return Context.prisma.user.findUnique({
        where: {
            id,
        },
    });
};

export const createUser = async (name: string): Promise<User> => {
    const user = await Context.prisma.user.create({
        data: {
            name,
        },
    });
    return user;
};
