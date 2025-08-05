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
        <div id="product-info" style={{ minHeight: "100vh", top: 100, display: "flex", alignItems: "center", justifyContent: "center", gap: "250px"}}>
            {product ? (
                <>
                    <div className="product-picture" style={{ padding: 20, width: 550, height: 550 }}>
                        <img src={product.imageLink} style={{ height: 550, width: 550 }}/>
                    </div>
                    <div id="product-text">
                        <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 25, left: "25px" }}>{product.productName}</p>
                        <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 20, left: "25px" }}>${product.price}</p>
                        <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 15, left: "25px" }}>{product.description}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
};