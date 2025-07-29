"use client";
import React from "react"
import { CategoriesBar } from "./CategoriesBar";

export const HeaderBar = () => {
    return (
        <div className="w-full h-20 bg-[#F0CFD4] sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="logo">
                        <a href={`/homepage`}>
                            <img src="/images/logo.png" height={20} width={200} style={{ position: "relative", right: 80 }}/>
                        </a>
                        
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
