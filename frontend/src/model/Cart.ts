export interface cartData {
    customerId: string;
    cartItems: {
        productId: string;
        quantity: number;
    }[];
}