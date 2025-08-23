"use client"
import React, { useEffect, useState } from "react";
import { HomepageCard } from "./HomepageCard";
import Link from "next/link";
import { productData } from '@/model/Product';
import axios from "axios";


export const ShopByCategory = () => {
    const [categoryCard, setCategoryCard] = useState<productData[]>([]);
    
    useEffect(() => {
        axios.get<productData[]>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product")
            .then((response) => {
                const allProducts = response.data;
                
                const typeMap = new Map<string, productData>();
                for (const product of allProducts) {
                    if (!typeMap.has(product.productType)) {
                        typeMap.set(product.productType, product);
                    }
                }

                setCategoryCard(Array.from(typeMap.values()));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    return (
        <div style={{ top: 25}}>
            <p className="shop-by-text">Shop By Category:</p>
               <div className="products-box">
                    {categoryCard.map((product, index) => (
                        <div key={index}>
                            <Link href={`/list_of_products?category=${product.productType}`}>
                                <HomepageCard productType={product.productType} imageLink={product.imageLink}></HomepageCard>
                            </Link>
                        </div>
                    ))}
               </div>
        </div>
    )
}