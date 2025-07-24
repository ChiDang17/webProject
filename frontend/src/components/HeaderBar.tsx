//"use client";
import React from "react"
import { CategoriesBar } from "./CategoriesBar";

export const HeaderBar = () => {
    return (
        <div className="w-full h-20 bg-[#F0CFD4] sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="logo">
                        <img src="/images/logo.png" height={280} width={280} style={{ position: "relative", right: 100 }}/>
                    </div>
                    <div className="categories-bar">
                        <CategoriesBar />
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." style={{ outlineStyle: "solid", outlineColor: "black", position: "relative", left: 60, color: "black", fontFamily: "serif, Georgia" }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
