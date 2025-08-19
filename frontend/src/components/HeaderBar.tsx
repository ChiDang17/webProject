"use client";
import React from "react"
import { CategoriesBar } from "./CategoriesBar";

import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export const HeaderBar = () => {
    return (
        <div className="w-full h-10 bg-[#400000] sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="logo">
                        <a href={`/homepage`}>
                            <img src="/images/logo.png" className="logo"/>
                        </a>
                    </div>

                    <div className="categories-bar">
                        <CategoriesBar />
                    </div>
                    
                    <div className="icons" style={{ padding: "40px" }}>
                        <IoMdSearch className="page-icons" />
                        <IoPersonOutline className="page-icons" />
                        <IoMdHeartEmpty className="page-icons" />
                        <IoCartOutline className="page-icons" />
                    </div>
                </div>
            </div>
        </div>
    );
};
