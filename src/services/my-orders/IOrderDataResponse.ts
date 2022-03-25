export interface OrderResponse {
    order: IOrderDataResponse;
}

export interface IOrderDataResponse {
    orderNumber: string;
    createdAt: string;
    status: string;
    site: string;
    totals: Array<IOrderDataResponseTotals>;
    deliveryOrders: Array<IOrderDataResponseDeliveryOrders>;
    actions: IOrderDataResponseActions;
}

export interface IOrderDataResponseTotals {
    type: string;
    amount: {
        currency: string;
        fraction: number;
        centAmount: number;
        price: string;
        symbol: string;
    };
    discount?: {
        currency: string;
        fraction: number;
        centAmount: number;
        price: string;
        symbol: string;
    };
    description: string;
}

export interface IOrderDataResponseDeliveryOrders {
    reservationNumber: string;
    businessId?: string;
    deliveryMethod: string;
    deliveryOrderNumber: string;
    deliveryInfo: {
        fromDateTime?: string;
        toDateTime?: string;
        deliveryTime?: string;
        deliveredDate?: string;
        pickupDate?: string;
    };
    deliveryAddress: any;
    shipments: Array<IOrderDataResponseDeliveryOrdersShipments>;
}

export interface IOrderDataResponseActions {
    cancel?: string;
    exchange?: string;
    review?: string;
    documents?: string;
    claim?: string;
}

export interface IOrderDataResponseDeliveryOrdersShipments {
    currentStatus: string;
    statuses: Array<{
        date: string;
        message: string;
        isActive: boolean;
    }>;
    orderLines: Array<IOrderDataResponseDeliveryOrdersOrderLines>;
    alert?: {
        type: string;
        message: string;
    };
}

export interface IOrderDataResponseDeliveryOrdersOrderLines {
    orderLineId: string;
    lineNumber: string;
    isPartOfBundle: boolean;
    isBundled: boolean;
    bundleInfo: any;
    status: {
        type: string;
    };
    item: {
        productId: string;
        sku: string;
        url: string;
        brandName: string;
        displayName: string;
        imageUrl: string;
        productDescription: string;
        portable: boolean;
        variantId: string;
    };
    quantity: {
        quantityNumber: string;
        quantityUnit: string;
    };
    unitPrice: {
        price: string;
        symbol: string;
        unit: string;
    };
    seller: {
        id?: string;
        name: string;
    };
}