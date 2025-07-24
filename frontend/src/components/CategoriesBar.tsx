"use client";
import React, { useEffect, useState } from 'react'
import { productData } from '@/model/Product';

export const CategoriesBar = () => {
    const [productType, setProductType] = useState<string[]>([]);

    useEffect(() => {
        async function getProducts() {
            const res = await fetch(`/api/product`);
            const data = await res.json();
            const types = data.map((product: productData) => product.productType); // get the productType from the products
            setProductType(Array.from(new Set(types))); // use set because we only want the unique product types (no duplicates)
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