// getCustomerById
export async function GET(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const data = await fetch(`http://localhost:8080/api/customer/${customerId}`);
    return Response.json(data);
}

// updateCustomer
export async function PUT(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const customerDataResponse = await fetch(`http://localhost:8080/api/customer/${customerId}`);
    const customerData = await customerDataResponse.json();
    const customer = {
        firstName: customerData.firstName,
        lastName: customerData.lastName,
        email: customerData.email,
        phoneNumber: customerData.phoneNumber,
        address: customerData.address,
    };
    return new Response(JSON.stringify(customer));
}

// deleteCustomer
export async function DELETE(req: Request, {params}: {params: {customerId: string} }) {
    const customerId = params.customerId;
    const data = await fetch(`http://localhost:8080/api/customer/${customerId}`);
    return new Response(null, {status: 204});
}  