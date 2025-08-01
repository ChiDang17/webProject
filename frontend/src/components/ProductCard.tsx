import { relative } from "path";
import React from "react";
import { text } from "stream/consumers";

type ProductCardProps = {
    productType: string;
    imageLink: string;
};

export const ProductCard = ({ productType, imageLink }: ProductCardProps) => {
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ padding: 20, width: 310, height: 310 }}>
                <img src={imageLink} style={{ height: 280, width: 280 }} />
            </div>
            <p style={{ fontFamily: "Georgia, serif", color: "black", padding: 10 }}>{productType}</p>
        </div>
    );
};
