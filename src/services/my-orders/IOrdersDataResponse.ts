import { IOrderDataResponse } from './IOrderDataResponse';

export interface IOrdersDataResponse {
    customerOrders: IOrderDataResponse[];
    pagination: {
        total: number;
        page: number;
        pageSize: number;
        totalPages: number;
    };
}