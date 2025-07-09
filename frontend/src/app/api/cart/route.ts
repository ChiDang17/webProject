// createCart
export async function POST(req: Request) {
    const cartDataResponse = await fetch(`http://localhost:8080/api/cart`);
    const cartData = await cartDataResponse.json()
    const cart = {
        items: cartData.items
    };
    return new Response(JSON.stringify(cart));
}