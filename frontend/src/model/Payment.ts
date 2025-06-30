export interface Payment {
    token: string;
    amount: number;
    customerId: string; // for if customer is a returning one and they have their card already saved
}