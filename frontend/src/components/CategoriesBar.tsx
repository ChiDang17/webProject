"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from 'next/link';

type CategoriesBarProps = {
  isVertical?: boolean; 
  textColor?: string;
};

export const CategoriesBar = ({isVertical, textColor}: CategoriesBarProps) => {
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

    const popupColor = `category-bar-buttons ${textColor ? textColor : "text-[#b39841ff]"}`;

    return (
        <div className={
            isVertical
                ? "flex flex-col space-y-3" //vertical for popup
                : "flex overflow-x-auto md:overflow-x-visible whitespace-nowrap gap-4" // horizontal for normal header
            }>
            <Link 
                href={`/list_of_products?category=all`} 
                className={popupColor}
            >
                Shop All
            </Link>

            {categories.map((category, index) => (
                <Link 
                    key={index} 
                    href={`/list_of_products?category=${encodeURIComponent(category)}`} 
                    className={popupColor}
                >
                    {category}
                </Link>
            ))}

            <Link 
                href={`/list_of_products`} 
                className={popupColor}
            >
                Best Sellers
            </Link>
        </div>
    );
};
