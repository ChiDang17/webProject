// findBySize
export async function GET(req: Request, {params}: {params: {size: number} }) {
    const size = params.size;
    const data = await fetch(`http://localhost:8080/api/product/size/${size}`);
    return Response.json(data);
}