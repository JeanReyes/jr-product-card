const DELIVERY_METHODS: Record<string, string> = { HOME_DELIVERY: "Entregado el", PICKUP_FROM_STORE: "Retiro en tienda" };
const DELIVERY_STATUS: Record<string, string> = {
  DELIVERED: "Compra entregada",
  IN_PROCESS: "Solicitud recibida",
  WITH_INVOICE: "Compra confirmada",
  SHIPMENT_IN_PROCESS: "Compra en camino",
  CANCELED: "Compra cancelada",
};

export const getDeliveryMethod = (method: string): string => {
  return DELIVERY_METHODS[method] || method;
};

export const getDeliveryStatus = (status: string): string => {
  return DELIVERY_STATUS[status] || status;
};
