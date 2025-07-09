export async function DELETE(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;

    try {
        const res = await fetch(`http://localhost:8080/api/cart/${customerId}`, {
            method: 'DELETE',
        });

        return new Response(null, {status: 204}); // 204 = no content to send back
    } catch (error) {
        console.log('Error deleting cart');
        return new Response(JSON.stringify({error: 'Failed to delete cart'}), {
            status: 500,
            headers: {'Content-Type': 'application/json'},
        });
    }
}   

export async function PUT(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const cartData = await req.json();

    try {
        const res = await fetch(`http://localhost:8080/api/cart/${customerId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartData),
        });

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: {'Content-Type': 'application/json'},
        });
    } catch (error) {
        console.log('Error updating cart');
        return new Response(JSON.stringify({error: 'Failed to update cart'}), {
            status: 500,
            headers: {'Content-Type': 'application/json'},
        });
    }
}