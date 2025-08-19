import React from "react";

type ProductCardProps = {
    productName: string;
    price: number;
    imageLink: string;
};

export const ProductCard = ({ productName, price, imageLink }: ProductCardProps) => {
    return (
        <div style={{ textAlign: "center" }}>
            <div className="product-card-box">
                <img src={imageLink} className="product-card-image" />
            </div>
            <p className="product-card-text">{productName}</p>
            <p className="product-card-text">${price}</p>
        </div>
    );
}