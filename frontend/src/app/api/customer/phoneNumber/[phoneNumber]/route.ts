// findByPhoneNumber
export async function GET(req: Request, {params}: {params: {phoneNumber: number} }) {
    const phoneNumber = params.phoneNumber;
    const data = await fetch(`http://localhost:8080/api/customer/phoneNumber/${phoneNumber}`);
    return Response.json(data.json());
}