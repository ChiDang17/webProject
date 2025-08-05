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
        <div style={{ backgroundColor: "#EDE8D0", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div id="specific-product" style={{ minHeight: "100vh " }}>
                <SpecificProduct></SpecificProduct>
            </div>
            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}
