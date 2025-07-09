export interface orderData {
    orderId?: string;
    customerId: string;
    items: {
        productId: string;
        quantity: number;
    }[];
    orderDate: string;
}