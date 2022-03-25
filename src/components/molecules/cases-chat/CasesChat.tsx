import React, { useEffect, useState } from 'react';
import { OrderDetail } from '../orders/order-detail/OrderDetail';
import { CaseCard } from './case-card/CaseCard';
import './casesChat.scss';
import { Chat } from '../chat/Chat';
import { ICaseDataResponse } from '../../../services/my-case/ICaseDataResponse';
import { getDashboard } from '../../../services/dashboard/DashboardService';
import { IOrderDataResponseDeliveryOrders } from '../../../services/my-orders/IOrderDataResponse';
import { formatSellerOrder } from '../orders/Orders';

export const CasesChat = () => {

    const [orderNumber, setOrderNumber] = useState('');
    const [caseData, setCaseData] = useState<ICaseDataResponse>();
    const [orderData, setOrderData] = useState<IOrderDataResponseDeliveryOrders>();


    async function loadDash() {
        if (orderNumber != '') {
            const response = await getDashboard(orderNumber);
            if (response?.order) {
                formatSellerOrder(response.order.deliveryOrders[0]);
            }
            setCaseData(response?.case);
            setOrderData(response?.order.deliveryOrders[0]);
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setOrderNumber(urlParams.get("orderNumber") || "");

        if (!orderData) {
            loadDash();
        }
    }, [orderNumber]);

    return (
        <div className="Cases-chat">
            <div className="cases-chat__content">
                <div className="order-case__container">
                    <div className="case-detail__container">{caseData && React.createElement(CaseCard, caseData)}</div>
                    <div className="order-detail__container">{orderData && React.createElement(OrderDetail, orderData)}</div>
                    {/* {orderData && (
            <div className="order-card__detail pannel order-card--product">
              <p className="order-card-number">Pedido Nº: {orderData.reservationNumber}</p>
              <label className="order-card-deliveryMethod">
                {getDeliveryMethod(orderData.deliveryMethod)} {orderData?.deliveryInfo?.deliveredDate?.split(" ")[0]}
              </label>
              <div className="order-card-status">
                <div className="product_container__img">
                  <img className="product-img" alt="" src={orderData.shipments[0].orderLines[0].item.imageUrl}></img>
                </div>
                <p className="order-card-deliveryStatus">Estado: {getDeliveryStatus(orderData.shipments[0].currentStatus)}</p>
              </div>
            </div>
          )} */}
                </div>
                {orderData && (
                    <div className="chat__container pannel">
                        <Chat caseNumber={caseData?.caseNumber}></Chat>
                    </div>
                )}
            </div>
        </div>
    );
};
