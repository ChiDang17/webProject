export const charge_new_card = async (token: string, amount: number) => {
    try {
        const response = await fetch(`/api/payment/charge-new-card`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Payment failed')
    }
}

// for returning customers who already have a card saved
export const charge_customer_card = async (customerId: string, amount: number) => {
    try {
        const response = await fetch(`/api/payment/charge-customer-card`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Payment failed')
    }
}