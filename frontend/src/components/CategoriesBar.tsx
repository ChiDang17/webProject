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
        <div className="flex overflow-x-auto md:overflow-x-visible whitespace-nowrap gap-4">
            <Link 
                href={`/list_of_products?category=all`} 
                className='category-bar-buttons'
            >
                Shop All
            </Link>

            {categories.map((category, index) => (
                <Link 
                    key={index} 
                    href={`/list_of_products?category=${encodeURIComponent(category)}`} 
                    className='category-bar-buttons'
                >
                    {category}
                </Link>
            ))}

            <Link 
                href={`/list_of_products`} 
                className='category-bar-buttons'
            >
                Best Sellers
            </Link>
        </div>
    );
};
