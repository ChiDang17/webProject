export async function GET(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;

    try {
        const res = await fetch(`http://localhost:8080/api/cart/items/${customerId}`, {
            method: 'GET',
        });

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: {'Content-Type': 'application/json'},
        });
    } catch (error) {
        console.log('Error fetching cart:');
        return new Response(JSON.stringify({error: 'Failed to fetch cart'}), {
            status: 500,
            headers: {'Content-Type': 'application/json'},
        });
    }  
}