import { IOrderDataResponse } from "./IOrderDataResponse";
import { IOrdersDataResponse } from "./IOrdersDataResponse";
export declare const getOrders: (email: string, page?: number) => Promise<IOrdersDataResponse | null>;
export declare const getOrderByNum: (order: string) => Promise<IOrderDataResponse | null>;
