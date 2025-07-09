// updateOrder
export async function PUT (req: Request, {params}: {params: {orderId: string} }) {
    const orderId = params.orderId;
    const orderDataResponse = await fetch(`http://localhost:8080/api/orders/${orderId}`);
    const orderData = await orderDataResponse.json();
    const order = {
        customerId: orderData.customerId,
        items: orderData.items,
        orderDate: orderData.orderDate
    };
    return new Response(JSON.stringify(order));
}

// deleteOrder
export async function DELETE(req: Request, {params}: {params: {orderId: string} }) {
    const orderId = params.orderId;
    const data = await fetch(`http://localhost:8080/api/orders/${orderId}`);
    return new Response(null, {status: 204});
}  