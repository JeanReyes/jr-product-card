import React,{ useState } from 'react';
import './OrdersStyle.css'
import { getOrders } from '../../../services/my-orders/MyOrdersService';
import { IOrdersDataResponse } from '../../../services/my-orders/IOrdersDataResponse';
import { OrdersCard } from './orders-list/OrdersList';
import { IOrderDataResponseDeliveryOrders } from '../../../services/my-orders/IOrderDataResponse';

const getStatusMessage = (originalStatus: string) => {
    let description = '';
    switch (originalStatus) {
        case 'PAYMENT_PENDING':
            description = 'Pendiente de pago';
            break;
        case 'IN_PROCESS':
            description = 'Reservado';
            break;
        case 'WITH_INVOICE':
        case 'PAYMENT_CONFIRMED':
        case 'SHIPMENT_IN_PROCESS':
        case 'BROKEN':
            description = 'Pedido en curso';
            break;
        case 'DELAYED':
            description = 'Pedido en curso';
            break;
        case 'DELIVERED':
            description = 'Pedido finalizado';
            break;
        case 'READY_TO_PICKUP':
            description = 'Listo para retiro';
            break;
        case 'CANCELED':
            description = 'Pedido cancelado';
            break;
        case 'EXPIRED':
            description = 'Pedido expirado';
            break;
        default:
            description = originalStatus;
            break;
    }
    return description;
};
const getDeliveryStatus = (originalStatus: string) => {
    switch (originalStatus) {
        case 'PICKUP_FROM_STORE':
            originalStatus = 'Retiro en tienda';
            break;
        case 'HOME_DELIVERY':
            originalStatus = 'Despacho a domicilio';
            break;
        case 'DELIVERED':
            originalStatus = 'Despacho a domicilio';
            break;
        default:
            originalStatus = 'Sin información';
            break;
    }
    return originalStatus;
};
export const formatSellerOrder = (sellerOrder: IOrderDataResponseDeliveryOrders) => {
    sellerOrder.shipments[0].currentStatus = getStatusMessage(sellerOrder.shipments[0].currentStatus);
    sellerOrder.deliveryMethod = getDeliveryStatus(sellerOrder.deliveryMethod);
}
const formatOrder = (orderData: IOrdersDataResponse) => {
    for (const order of orderData.customerOrders) {
        for (const sellerOrder of order.deliveryOrders) {
            formatSellerOrder(sellerOrder);
        }
    }
};

export const Orders = () => {

    const [ordersData, setOrdersData] = useState({} as IOrdersDataResponse);
    const [caseEmailInput, setCaseEmailInput] = useState('');

    const changePageBack = (paginationData: any, email: string) => {
        if (paginationData.page - 1 < 1) {
        } else {
            let page = paginationData.page - 1
            viewOrdersByEmail(email, page)
        }
    }

    const changePageUp = (paginationData: any, email: string) => {
        if (paginationData.page + 1 > paginationData.totalPages) {
        } else {
            let page = paginationData.page + 1
            viewOrdersByEmail(email, page)
        }
    }

    const viewOrdersByEmail = async (email: string, page?: number) => {
        const response = await getOrders(email, page);
        if (response) {
            formatOrder(response);
            setOrdersData(response as IOrdersDataResponse);
        }
    };

    return (
        <div className="Orders">
            <div className="Orders-body">
                <div className="orders-search pannel">
                    <p className="title">
                        Revisión de casos y compras
                    </p>
                    <div className="input-container">
                        <p className="subtitle">Ingrese su email:</p>
                        <input className="search_inputs" key="email" value={caseEmailInput} type="text" onInput={e => setCaseEmailInput(e.currentTarget.value)}></input>
                    </div>
                    <button className='button' onClick={e => viewOrdersByEmail(caseEmailInput)}>Ver detalle</button>
                </div>
                {ordersData && ordersData.pagination && ordersData.pagination.totalPages > 1 && (
                    <div className="orders-pagination">
                        <div className="before-arrow arrow" onClick={e => changePageBack(ordersData.pagination, caseEmailInput)}>{'<'}</div>
                        <p>Página {ordersData.pagination.page} de {ordersData.pagination.totalPages}</p>
                        <div className="next-arrow arrow" onClick={e => changePageUp(ordersData.pagination, caseEmailInput)}>{'>'}</div>
                    </div>
                )}
                {
                    ordersData && ordersData.customerOrders &&
                    ordersData.customerOrders.map((customerOrder, index) =>
                        <div key={index} className='orders-container pannel'>
                            <OrdersCard
                                order={customerOrder}
                            ></OrdersCard>
                        </div>
                    )
                }
            </div>
        </div>
    );
};