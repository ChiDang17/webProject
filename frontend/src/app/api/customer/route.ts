// createCustomer
export async function POST(req: Request) {
    const customerDataResponse = await fetch(`http://localhost:8080/api/customer`);
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

// getAllCustomers
export async function GET(req: Request) {
    const data = await fetch(`http://localhost:8080/api/customer`);
    return Response.json(data.json());
}