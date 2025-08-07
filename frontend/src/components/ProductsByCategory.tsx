"use client"
import react, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { productData } from '@/model/Product';
import axios from "axios";
import { useSearchParams } from "next/navigation";

type Filters = {
  colors: string[];
  sizes: number[]; 
  productTypes: string[];
};


export const ProductsByCategory = ({ filters }: { filters: Filters }) => {
    const [productCard, setProductCard] = useState<productData[]>([]);
    const searchParams = useSearchParams();
    const productType = searchParams.get("category");

    useEffect(() => {
         if (!productType || productType === "all") {
            axios.get<productData[]>("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product")
                .then((response) => {
                    setProductCard(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            axios.get<productData[]>(`https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/productType/${productType}`)
                .then((response) => {
                    setProductCard(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [productType]);

    // only shows products that include selected filters
    const filteredProducts = productCard.filter((p) =>
        (filters.colors.length === 0 || filters.colors.includes(p.color)) &&
        (filters.sizes.length === 0 || filters.sizes.includes(p.size)) &&
        (filters.productTypes.length === 0 || filters.productTypes.includes(p.productType))
    );

    return (
        <div style={{ position: "relative", top: 25}}>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "30px" }}>
                {filteredProducts.map((product, index) => (
                    <div key={index} style={{ padding: "15px" }}>
                    <Link href={`/specific_product?productNumber=${product.productNumber}`}>
                        <ProductCard productName={product.productName} imageLink={product.imageLink} price={product.price}></ProductCard>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}