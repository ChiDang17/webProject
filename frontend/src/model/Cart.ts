export interface cartData {
    customerId: string;
    items: {
        productId: string;
        quantity: number;
    }[];
}