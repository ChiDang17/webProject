"use client"
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { productData } from '@/model/Product';
import axios from "axios";


export const ShopByCategory = () => {
    const [categoryCard, setCategoryCard] = useState<productData[]>([]);
    
    useEffect(() => {
        axios.get<productData[]>("http://localhost:8080/api/product")
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
        <div style={{ position: "relative", top: 50}}>
            <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 25, position: "relative", left: "25px" }}>Shop By Category:</p>
               <div style={{ display: "flex", flexWrap: "wrap", padding: "30px" }}>
                    {categoryCard.map((product, index) => (
                        <div key={index} style={{ padding: "15px" }}>
                        <Link href={`/list_of_products?category=${product.productType}`}>
                            <ProductCard productType={product.productType} imageLink={product.imageLink}></ProductCard>
                        </Link>
                        </div>
                    ))}
               </div>
        </div>
    )
}