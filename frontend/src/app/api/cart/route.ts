export async function POST(req: Request) {
    const cartData = await req.json();

    try {
        const res = await fetch(`http://localhost:8080/api/cart`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartData),
        });

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: {'Content-Type': 'application/json'},
        })
    } catch (error) {
        console.log('Error creating cart');
        return new Response(JSON.stringify({error: 'Failed to create cart'}), {
            status: 500,
            headers: {'Content-Type': 'application/json'},
        });
    }
}