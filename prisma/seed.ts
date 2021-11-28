import { UserSeed } from "./seeds/userSeed";
import { prisma } from "./connection";

async function main() {
    // Order of saving is important.
    await UserSeed.save();
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
