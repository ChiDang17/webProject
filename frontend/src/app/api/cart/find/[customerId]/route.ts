// findByCustomerId
export async function GET(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const data = await fetch(`http://localhost:8080/api/cart/find/${customerId}`);
    return Response.json(data);
}