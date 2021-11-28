import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLOutputType } from "graphql";

import { ResponseStatusType } from "../graphql/types/ResponseStatusType";
import { IResponse } from "../interfaces/Response";

export function createResponse<DataType>(data?: DataType, index?: number, error?: Error): IResponse<DataType> {
    if (error == null) {
        return { status: { success: true }, data, index };
    } else {
        return { status: { success: false, reason: error.message } };
    }
}

export function createErrorResponse<DataType>(error: unknown): IResponse<DataType> {
    if (error instanceof Error) {
        return createResponse<DataType>(undefined, undefined, error);
    } else if (typeof error == "string") {
        return createResponse<DataType>(undefined, undefined, new Error(error));
    } else {
        console.log(`Unknown error structure error: ${error}`);
        return createResponse<DataType>(undefined, undefined, new Error(`Unknown error: ${error}`));
    }
}

export function createGraphQLResponse(type: GraphQLOutputType, name: string): GraphQLObjectType {
    return new GraphQLObjectType({
        name: name,
        fields: {
            data: { type: type },
            status: { type: new GraphQLNonNull(ResponseStatusType) },
        },
    });
}

export function createGraphQLPagedResponse(type: GraphQLOutputType, name: string): GraphQLObjectType {
    return new GraphQLObjectType({
        name: name,
        fields: {
            data: { type: type },
            index: { type: GraphQLInt },
            status: { type: new GraphQLNonNull(ResponseStatusType) },
        },
    });
}
