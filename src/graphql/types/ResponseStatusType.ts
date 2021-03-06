import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export const ResponseStatusType: GraphQLObjectType = new GraphQLObjectType({
    name: "EventsResponseStatus",
    fields: {
        success: { type: new GraphQLNonNull(GraphQLBoolean) },
        reason: { type: GraphQLString },
    },
});
