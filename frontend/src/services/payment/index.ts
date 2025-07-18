export const charge_new_card = async (token: string, amount: number) => {
    try {
        const response = await fetch(`/api/payment/charge`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ token, amount })
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Payment failed')
    }
}

// for returning customers who already have a card saved
export const charge_customer_card = async (customerId: string, amount: number) => {
    try {
        const response = await fetch(`/api/payment/charge`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ customerId, amount })
        });
        const data = await response.json();
        return data;
    } catch {
        console.error('Payment failed')
    }
}