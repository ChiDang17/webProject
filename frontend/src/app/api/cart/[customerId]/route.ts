// deleteByCustomerId
export async function DELETE(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const data = await fetch(`http://localhost:8080/api/cart/${customerId}`);
    return new Response(null, {status: 204}); // 204 because we're not returning anything
}   

// updateCart
export async function PUT(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const cartData = await fetch(`http://localhost:8080/api/cart/${customerId}`);
    const cart = {
        items: cartData.json()
    };
    return new Response(JSON.stringify(cart));
}