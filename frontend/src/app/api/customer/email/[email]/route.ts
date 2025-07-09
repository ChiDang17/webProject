export async function GET(req: Request, {params}: {params: {email: string} }) {
    const email = params.email;
    const data = await fetch(`http://localhost:8080/api/customer/email/${email}`);
    return Response.json(data.json());
}