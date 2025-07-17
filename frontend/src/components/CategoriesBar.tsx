import React, { use, useEffect, useState } from 'react'
import { productData } from '@/model/Product';

export const CategoriesBar = () => {
    const [allProducts, setAllProducts] = useState<productData[]>([]);
    const [productType, setProductType] = useState<string[]>([]);

    useEffect(() => {
        async function getProducts() {
            const res = await fetch(`/api/product`);
            const data = await res.json();
            setAllProducts(data);
            const types = data.map((product: productData) => product.productType); // get productType from products
            setProductType(Array.from(new Set(types))); // make sure we only have unique product types since set has no duplicates
        }
        getProducts();
    }, []);

    return (
        <div style={{display:'inline-block'}}>
            <div className='categories-bar'>
                {productType.map((type, index) => (
                    <button key={index} className='category-button'>
                        {type}
                    </button>
                ))}
            </div>
        </div>
        
    )
}