"use client"
import React, { useEffect, useState } from "react";
import { HomepageCard } from "./HomepageCard";
import Link from "next/link";
import { productData } from '@/model/Product';
import axios from "axios";


export const ShopByMetal = () => {
    const [categoryCard, setCategoryCard] = useState<productData[]>([]);
    
    useEffect(() => {
        axios.get<productData[]>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product")
            .then((response) => {
                const allProducts = response.data;

                const typeMap = new Map<string, productData>();
                for (const product of allProducts) {
                    if (!typeMap.has(product.color)) {
                        typeMap.set(product.color, product);
                    }
                }

                setCategoryCard(Array.from(typeMap.values()));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    return (
        <div style={{ position: "relative", top: 50}}>
            <p className="shop-by-text">Shop By Metal:</p>
               <div className="products-box">
                    {categoryCard.map((product, index) => (
                        <div key={index} style={{padding:"15px"}}>
                        <Link href={`/list_of_products?category=${product.color}`}>
                            <HomepageCard productType={product.color} imageLink={product.imageLink}></HomepageCard>
                        </Link>
                        </div>
                    ))}
               </div>
        </div>
    )
}