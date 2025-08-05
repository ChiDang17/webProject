import React from "react";

type ProductCardProps = {
    productName: string;
    price: number;
    imageLink: string;
};

export const ProductCard = ({ productName, price, imageLink }: ProductCardProps) => {
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ padding: 20, width: 310, height: 310 }}>
                <img src={imageLink} style={{ height: 280, width: 280 }} />
            </div>
            <p style={{ fontFamily: "Georgia, serif", color: "black", padding: 10 }}>{productName}</p>
            <p style={{ fontFamily: "Georgia, serif", color: "black", padding: 10 }}>${price}</p>
        </div>
    );
}