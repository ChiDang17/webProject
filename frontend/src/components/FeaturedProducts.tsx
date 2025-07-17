import React from "react";
import { ProductCard } from "./ProductCard";


export const FeaturedProducts = () => {
    return (
        <div>
            <p>Featured Products:</p>
            <div className="productCard-container" style={{ display: "inline-block" }}>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    )
}