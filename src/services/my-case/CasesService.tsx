import axios from 'axios';
import { ICaseDataResponse } from './ICaseDataResponse';

const URL = 'http://localhost:8000/v1/facl';
export const getCaseByOrder = async (order: string) => {
    try {
        const caseResponse = await axios.get(`${URL}/cases/orders/${order}`);
        return caseResponse.data.data as ICaseDataResponse;
    } catch (error) {
        console.log(error);
        return null;
    }
};