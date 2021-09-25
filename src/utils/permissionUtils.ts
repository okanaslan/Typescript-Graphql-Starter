// import { GraphQLResolveInfo } from "graphql";
// import { rule } from "graphql-shield";

// import { app } from "../app";
// import { IContext } from "../interfaces/Context";
// import { Permission } from ".prisma/client";
// import { Rule } from "graphql-shield/dist/rules";
// import { IFirebaseUser } from "../interfaces/FirebaseUser";
// import { Role } from "@prisma/client";

// const doesHavePermission = async (firebaseUser: IFirebaseUser, permission: Permission): Promise<boolean> => {
//     if (firebaseUser.customerId != null) {
//         const user = await app.prisma.user.findFirst({ where: { id: firebaseUser.customerId }, select: { authorization: true } });
//         if (user != null) {
//             return user.authorization?.permissions.includes(permission) ?? false;
//         }
//     }
//     return false;
// };

// const doesHaverole = async (firebaseUser: IFirebaseUser, role: Role): Promise<boolean> => {
//     if (firebaseUser.customerId != null) {
//         const user = await app.prisma.user.findFirst({ where: { id: firebaseUser.customerId }, select: { authorization: true } });
//         if (user != null) {
//             return user.authorization?.role == role;
//         }
//     }
//     return false;
// };

// export const createRuleForPermission = (permission: Permission): Rule => {
//     const ruleFunction = async (_parent: any, _args: any, context: IContext, _info: GraphQLResolveInfo): Promise<boolean> => {
//         if (context.user != null) {
//             return doesHavePermission(context.user, permission);
//         }
//         return false;
//     };
//     return rule()(ruleFunction);
// };

// export const createRuleForRole = (role: Role): Rule => {
//     const ruleFunction = async (_parent: any, _args: any, context: IContext, _info: GraphQLResolveInfo): Promise<boolean> => {
//         if (context.user != null) {
//             return doesHaverole(context.user, role);
//         }
//         return false;
//     };
//     return rule()(ruleFunction);
// };
