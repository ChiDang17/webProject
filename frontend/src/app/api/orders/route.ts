// createOrder
export async function POST(req: Request) {
    const orderDataResponse = await fetch(`http://localhost:8080/api/orders`);
    const orderData = await orderDataResponse.json();
    const order = {
        customerId: orderData.customerId,
        items: orderData.items,
        orderDate: orderData.orderDate
    };
    return new Response(JSON.stringify(order));
}

// getAllOrders
export async function GET(req: Request) {
    const data = await fetch(`http://localhost:8080/api/orders`);
    return Response.json(data);
}