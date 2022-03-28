import React from "react";
import { getDeliveryMethod } from "../../../../constants/deliveryMethod";
import { IOrderDataResponseDeliveryOrders } from "../../../../services/my-orders/IOrderDataResponse";
import "./orderDetail.scss";

export const OrderDetail = (order: IOrderDataResponseDeliveryOrders) => {
  return (
    <div>
      <div className="order-card__detail pannel">
        <div className="order-card__product">
          <p className="order-card__number">Pedido Nº: {order.reservationNumber}</p>
          <label className="order-card__deliveryMethod">
            {getDeliveryMethod(order.deliveryMethod)} {order?.deliveryInfo?.deliveredDate?.split(" ")[0]}
          </label>
          <div className="product_container">
            <img className="product-img" alt="" src={order.shipments[0].orderLines[0].item.imageUrl}></img>
            <div className="product-detail">
              <p className="product-detail__name">{order.shipments[0].orderLines[0].item.displayName}</p>
              <p className="product-detail__brand">{order.shipments[0].orderLines[0].item.brandName}</p>
              <p className="product-detail__seller">{order.shipments[0].orderLines[0].seller.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
