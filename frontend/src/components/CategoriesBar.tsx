"use client";
import React, { useEffect, useState } from 'react'
import { productData } from '@/model/Product';
import axios from "axios";
import Link from 'next/link';

export const CategoriesBar = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        axios
            .get<string[]>("http://localhost:8080/api/product/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Link href={`/list_of_products`} style={{color: "#b39841ff", fontFamily: "Georgia, serif", fontSize: 20, padding: "20px"}}>
                Shop By
            </Link>
            {categories.map((category, index) => (
                <Link key={index} href={`/list_of_products`} style={{color: "#b39841ff", fontFamily: "Georgia, serif", fontSize: 20, padding: "20px"}}>
                    {category}
                </Link>
            ))}
            <Link href={`/list_of_products`} style={{color: "#b39841ff", fontFamily: "Georgia, serif", fontSize: 20, padding: "20px"}}>
                Best Sellers
            </Link>
        </div>
    )
}