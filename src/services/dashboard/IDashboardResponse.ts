import { ICaseDataResponse } from '../my-case/ICaseDataResponse';
import { IOrderDataResponse, IOrderDataResponseDeliveryOrders } from '../my-orders/IOrderDataResponse';

export interface IDashboardResponse {
    order: IOrderDataResponse;
    case: ICaseDataResponse;
    chat: any;
}