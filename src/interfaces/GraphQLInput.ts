import { IPaginationInput } from "./PaginationInput";

export interface GraphQLInput<InputType = undefined, FilterType = undefined, PaginationType = IPaginationInput> {
    pagination?: PaginationType;
    input?: InputType;
    filter?: FilterType;
}
