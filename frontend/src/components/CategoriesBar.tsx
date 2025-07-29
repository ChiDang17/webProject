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
            {categories.map((category, index) => (
                <Link key={index} href={`/list_of_products`} style={{color: "black", fontFamily: "Georgia, serif", fontSize: 25, marginRight: "20px"}}>
                    {category}
                </Link>
            ))}
        </div>
    )
}