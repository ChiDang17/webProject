export async function POST(req: Request) {
    const cartData = await req.json();
    const cart = {
        items: cartData.getItems()
    };
    return new Response(JSON.stringify(cart));
}