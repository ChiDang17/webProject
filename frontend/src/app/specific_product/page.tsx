"use client"
import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";
import { SpecificProduct } from "@/components/SpecificProduct";
import { productData } from "@/model/Product";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function specific_product() {

    return (
        <div className="background">
            <div className="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div className="specific-product">
                <SpecificProduct></SpecificProduct>
            </div>
            <div className="footer">
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}
