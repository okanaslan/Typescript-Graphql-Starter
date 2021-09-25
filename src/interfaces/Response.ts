import { IResponseStatus } from "./ResponseStatus";

export interface IResponse<DataType> {
    status: IResponseStatus;
    index?: number;
    data?: DataType;
}
