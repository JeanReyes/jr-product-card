import axios from "axios";
import { IOrderDataResponse } from "./IOrderDataResponse";
import { IOrdersDataResponse } from "./IOrdersDataResponse";

const URL = 'http://localhost:8000/v1/facl';
export const getOrders = async (email: string, page = 1) => {
    try {
        const ordersResponse = await axios.get(`${URL}/orders/?email=${email}&page=${page}`);
        return ordersResponse.data.data as IOrdersDataResponse;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const getOrderByNum = async (order: string) => {
    try {
        const orderResponse = await axios.get(`${URL}/orders/${order}`);
        return orderResponse.data.data as IOrderDataResponse;
    } catch (e) {
        console.log(e);
        return null;
    }
}