import React, { useEffect, useState } from 'react'
import { productData } from '@/model/Product';

const CategoriesBar = () => {
    const [products, setProducts] = useState<productData[]>([]); // need to fetch all the products to get the types
    const [productTypes, setProductTypes] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>('All'); // what user selected

    useEffect(() => {
        async function fetchProductTypes() {
            const response = await fetch('/api/products');
            const data = await response.json();
            setSelectedType(data.productType);
        }
        fetchProductTypes();
    })

    return (
        <div className='categories-bar'>
            <ul className='categories-list'>
            
            </ul>
        </div>
    )
}