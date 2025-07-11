// createProduct
export async function PUT(req: Request) {
    const productDataResponse = await fetch(`http://localhost:8080/api/product`);
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

// getAllProducts
export async function GET(req: Request) {
    const data = await fetch(`http://localhost:8080/api/product`);
    return Response.json(data);
}