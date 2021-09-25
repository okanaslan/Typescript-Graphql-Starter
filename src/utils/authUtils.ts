import { IAuthUser } from "../interfaces/AuthUser";
import { Request } from "express";
import { NodeEnvironment } from "../enums/NodeEnvironment";

export class AuthUtils {
    static handleAuth(request: Request): IAuthUser | undefined {
        if (process.env["NODE_ENV"] == NodeEnvironment.local) {
            const user: IAuthUser = { userId: "userId" };
            return user;
        } else {
            const userData = request.headers["user"];
            if (userData != null && typeof userData == "string") {
                const user: IAuthUser = JSON.parse(userData);
                return user;
            }
        }
        return undefined;
    }
}
