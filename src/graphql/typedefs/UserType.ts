import { GraphQLNonNull, GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
    },
});
