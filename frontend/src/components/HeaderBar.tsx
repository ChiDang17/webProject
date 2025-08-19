"use client";
import React from "react"
import { CategoriesBar } from "./CategoriesBar";

import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export const HeaderBar = () => {
    return (
        <div className="w-full bg-[#400000] sticky top-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start py-2">
                    <div className="logo">
                        <a href={`/homepage`}>
                            <img src="/images/logo.png" className="logo"/>
                        </a>
                    </div>

                    <div className="categories-bar w-full md:w-auto">
                        <CategoriesBar />
                    </div>
                    
                    <div className="icons flex gap-4">
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
