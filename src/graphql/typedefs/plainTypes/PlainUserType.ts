import { GraphQLNonNull, GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PlainUserType: GraphQLObjectType = new GraphQLObjectType({
    name: "PlainUser",
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
    },
});
