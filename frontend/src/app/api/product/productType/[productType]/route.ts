// findByProductType
export async function GET(req: Request, {params}: {params: {productType: string} }) {
    const productType = params.productType;
    const data = await fetch(`http://localhost:8080/api/product/productType/${productType}`);
    return Response.json(data.json());
}