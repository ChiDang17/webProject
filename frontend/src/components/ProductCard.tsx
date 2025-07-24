import { relative } from "path";
import React from "react";
import { text } from "stream/consumers";

export const ProductCard = () => {
    return (
        <div style={{ backgroundColor: "white", outlineStyle: "solid", outlineColor: "black", display: "inline-block", width: 300, height: 300 }}>
            <div className="product-picture" style={{ height: 200, width: 200, margin: "auto", position: "relative", top: "10px" }}>
                <img src="/images/example-product.jpg"/>
            </div>

            <div className="product-name" style={{ color: "black", textAlign: "center", position: "relative", top: 15, fontFamily: "serif, Georgia" }}>
                <p>Example Product</p>
            </div>

            <div className="product-price" style={{ color: "black", textAlign: "center", position: "relative", top: 20, fontFamily: "serif, Georgia" }}>
                <p>$10.00</p>
            </div>
        </div>
    )
}