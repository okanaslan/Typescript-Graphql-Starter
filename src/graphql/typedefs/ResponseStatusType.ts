import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export const ResponseStatusType: GraphQLObjectType = new GraphQLObjectType({
    name: "EventsResponseStatus",
    fields: {
        success: { type: GraphQLNonNull(GraphQLBoolean) },
        reason: { type: GraphQLString },
    },
});
