"use client";
import { productData } from "@/model/Product";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// type SpecificProductProps = {
//     productName: string;
//     price: number;
//     imageLink: string;
//     description: string;
// };

export const SpecificProduct = () => {
    const [product, setProduct] = useState<productData>();
    const searchParams = useSearchParams();
    const productNumber = searchParams.get("productNumber");

    useEffect(() => {
        axios.get<productData>(`https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/number/${productNumber}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [productNumber]);

    return (
        <div className="product-info">
            {product ? (
                <>
                    <div className="product-picture">
                        <img src={product.imageLink}/>
                    </div>
                    <div id="product-text">
                        <p className="product-name-text">{product.productName}</p>
                        <p className="product-price-text">${product.price}</p>
                        <p className="product-desc-text">{product.description}</p>
                    </div>
                </>
            ) : ( 
                <p>Loading...</p>
            )}
        </div>
    )
};