export interface Order {
    id?: number;
    customerId: string;
    productId: number;
    orderDate: string;
    quantity: number;
}