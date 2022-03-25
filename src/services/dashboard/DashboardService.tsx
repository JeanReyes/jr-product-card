import axios from 'axios';
import { IDashboardResponse } from './IDashboardResponse';

const URL = 'http://localhost:8000/v1/facl';
export const getDashboard = async (order: string) => {
    try {
        const dashboardResponse = await axios.get(`${URL}/dashboard/${order}`);
        return dashboardResponse.data.data as IDashboardResponse;
    } catch (error) {
        console.log(error);
        return null;
    }
}