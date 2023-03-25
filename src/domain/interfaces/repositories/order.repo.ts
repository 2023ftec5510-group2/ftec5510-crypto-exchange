import OrderResult from "../../entities/order/order-result";
import OrderRequest from "../../entities/order/order-request";
import QueryOrder from "../../entities/order/query-order";
import Order from "../../entities/order/order";

export default interface OrderRepo {
    createOrder(order: OrderRequest): Promise<Order>
    queryOrder(query: QueryOrder): Promise<OrderResult>
    getUSDTExchangeRate(): Promise<number>
}