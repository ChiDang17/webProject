import React from "react";
import { ProductCard } from "./ProductCard";


export const FeaturedProducts = () => {
    return (
        <div style={{ position: "relative", top: 25}}>
            <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 25, position: "relative", left: "25px" }}>Featured Products:</p>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <ProductCard></ProductCard>
                </div>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <ProductCard></ProductCard>
                </div>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <ProductCard></ProductCard>
                </div>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <ProductCard></ProductCard>
                </div>
        </div>
    )
}