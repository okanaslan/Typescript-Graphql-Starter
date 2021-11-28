import { User } from ".prisma/client";
import { prisma } from "../connection";

export class UserSeed {
    static users: User[] = [
        {
            id: "00144615-cd67-4b8e-a93c-629dc0adb5d3",
            name: "MERT",
        },
    ];

    static async save() {
        await Promise.all(
            this.users.map(async (user) => {
                await prisma.user.create({ data: user });
            })
        );
        console.info(`${this.name} Completed!`);
    }
}
