import { relative } from "path";
import React from "react";
import { text } from "stream/consumers";

type HomepageCardProps = {
    productType: string;
    imageLink: string;
};

export const HomepageCard = ({ productType, imageLink }: HomepageCardProps) => {
    return (
        <div style={{ textAlign: "center" }}>
            <div className="product-card-box">
                <img src={imageLink} className="product-card-image" />
            </div>
            <p className="product-card-text">{productType}</p>
        </div>
    );
};
