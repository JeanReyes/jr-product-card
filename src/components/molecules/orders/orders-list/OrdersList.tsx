import React,{ FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { getDeliveryMethod, getDeliveryStatus } from "../../../../constants/deliveryMethod";
import { getCaseByOrder } from "../../../../services/my-case/CasesService";
import { IOrderDataResponse, OrderResponse } from "../../../../services/my-orders/IOrderDataResponse";
import "./ordersList.scss";

export const OrdersCard = (customerOrder: OrderResponse): JSX.Element => {
    const { order } = customerOrder;

    const viewCase = (sellerOrder: string) => {
        window.location.href = `/cases-chat/user?orderNumber=${sellerOrder}`;
    };
    const formattedDate = order.createdAt.split(" ")[0];
    return (
        <>
            <div className="order-card">
                <div className="card-title-container">
                    <p className="card-title">Compra online</p>
                    <label className="order-date">Fecha de la compra: {formattedDate}</label>
                    {/* <label className="order_site">Comprado en: {order.site}</label> */}
                </div>
                <div className="order-card__detail">
                    {order.deliveryOrders.map((orderDelivery, index) => (
                        <div key={index}>
                            <hr></hr>
                            <div className="card-content">
                                <div className="order-card--product">
                                    <p className="order-card-number">Pedido Nº: {orderDelivery.reservationNumber}</p>
                                    <label className="order-card-deliveryMethod">
                                        {getDeliveryMethod(orderDelivery.deliveryMethod)} {orderDelivery?.deliveryInfo?.deliveredDate?.split(" ")[0]}
                                    </label>
                                    <div className="order-card-status">
                                        <div className="product_container__img">
                                            <img className="product-img" alt="" src={orderDelivery.shipments[0].orderLines[0].item.imageUrl}></img>
                                        </div>
                                        <p className="order-card-deliveryStatus">Estado: {getDeliveryStatus(orderDelivery.shipments[0].currentStatus)}</p>
                                    </div>
                                </div>
                                <div className="order-card--actions">
                                    <button className="button" onClick={e => viewCase(orderDelivery.reservationNumber)}>
                                        Abrir conversación
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
