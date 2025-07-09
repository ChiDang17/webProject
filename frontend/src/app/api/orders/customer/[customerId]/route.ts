// getOrderById
export async function GET(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const data = await fetch(`https://localhost:8080/api/orders/customer/${customerId}`);
    return Response.json(data.json());
}