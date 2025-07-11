// getProductById
export async function GET(req: Request, {params}: {params: {productId: string} }) {
    const productId = params.productId;
    const data = await fetch(`https://localhost:8080/api/product/${productId}`);
    return Response.json(data);
}

// updateProduct
export async function PUT(req: Request, {params}: {params: {productId: string} }) {
    const productId = params.productId;
    const productDataResponse = await fetch(`http://localhost:8080/api/product/${productId}`);
    const productData = await productDataResponse.json();
    const product = {
        productNumber: productData.productNumber,
        productType: productData.productType,
        color: productData.color,
        size: productData.size,
        price: productData.price,
        description: productData.description,
        imageLink: productData.imageLink
    };
    return new Response(JSON.stringify(product));
}

// deleteProduct
export async function DELETE(req: Request, {params}: {params: {productId: string} }) {
    const productId = params.productId;
    const data = await fetch(`http://localhost:8080/api/product/${productId}`);
    return new Response(null, {status: 204});
}  