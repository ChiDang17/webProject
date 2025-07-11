// findByColor
export async function GET(req: Request, {params}: {params: {color: string} }) {
    const color = params.color;
    const data = await fetch(`http://localhost:8080/api/product/color/${color}`);
    return Response.json(data);
}