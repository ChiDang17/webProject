"use client";
import React from "react"
import { CategoriesBar } from "./CategoriesBar";

import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

// search, login/profile, wishlist, cart

export const HeaderBar = () => {
    return (
        <div className="w-full h-10 bg-[#400000] sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="logo">
                        <a href={`/homepage`}>
                            <img src="/images/logo.png" height={5} width={90} style={{ position: "relative", right: 80 }}/>
                        </a>
                    </div>

                    <div className="categories-bar">
                        <CategoriesBar />
                    </div>
                    
                    <div className="icons" style={{ padding: "40px" }}>
                        <IoMdSearch color="#b39841ff" size={20} style={{ textAlign: "justify", display: "inline-block" }} />
                        <IoPersonOutline color="#b39841ff" size={20} style={{ textAlign: "justify", display: "inline-block"}} />
                        <IoMdHeartEmpty color="#b39841ff" size={20} style={{ textAlign: "justify", display: "inline-block"}} />
                        <IoCartOutline color="#b39841ff" size={20} style={{ textAlign: "justify", display: "inline-block"}} />
                    </div>
                </div>
            </div>
        </div>
    );
};
