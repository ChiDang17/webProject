import React from "react";


export const ShopByCategory = () => {
    // bracelets, necklaces, rings, earrings
    // box w/ picture and text underneath; similar to ProductCard
    return (
        <div style={{ backgroundColor: "#202022ff", minHeight: "100vh"}}>
            <div id="bracelet-card">
                <img></img>
                <p style={{color: "#b39841ff", fontFamily: "Georgia, serif"}}>Shop Bracelets</p>
            </div>

            <div id="necklace-card">
                <img></img>
                <p style={{color: "#b39841ff", fontFamily: "Georgia, serif"}}>Shop Necklaces</p>
            </div>

            <div id="ring-card">
                <img></img>
                <p style={{color: "#b39841ff", fontFamily: "Georgia, serif"}}>Shop Rings</p>
            </div>

            <div id="earring-card">
                <img></img>
                <p style={{color: "#b39841ff", fontFamily: "Georgia, serif"}}>Shop Earrings</p>
            </div>
        </div>
    )
}