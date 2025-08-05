"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from 'next/link';

export const CategoriesBar = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        axios
            .get("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Link 
                href={`/list_of_products`} 
                style={{ color: "#b39841ff", fontFamily: "Georgia, serif", fontSize: 20, padding: "20px" }}
            >
                Shop By
            </Link>

            {categories.map((category, index) => (
                <Link 
                    key={index} 
                    href={`/list_of_products?category=${encodeURIComponent(category)}`} 
                    style={{ color: "#b39841ff", fontFamily: "Georgia, serif", fontSize: 20, padding: "20px" }}
                >
                    {category}
                </Link>
            ))}

            <Link 
                href={`/list_of_products`} 
                style={{ color: "#b39841ff", fontFamily: "Georgia, serif", fontSize: 20, padding: "20px" }}
            >
                Best Sellers
            </Link>
        </div>
    );
};
