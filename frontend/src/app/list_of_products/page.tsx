"use client";
import { FiltersBar } from "@/components/FiltersBar";
import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";
import { ProductCard } from "@/components/ProductCard";
import { ProductsByCategory } from "@/components/ProductsByCategory";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export type Filters = {
    colors: string[];
    sizes: number[];
    productTypes: string[];
};


export default function list_of_products() {
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState<Filters>({
        colors: [],
        sizes: [],
        productTypes: [],
    });

    // reading filters from url
    useEffect(() => {
        const colorFromUrl = searchParams.get("colors");
        const sizeFromUrl = searchParams.get("sizes");
        const productTypeFromUrl = searchParams.get("productTypes");

        const defaultFilters: Filters = {
            colors: [],
            sizes: [],
            productTypes: [],
        };
        
        if (colorFromUrl) {
            defaultFilters.colors = colorFromUrl.split(",");
        }

        if (sizeFromUrl) {
            defaultFilters.sizes = sizeFromUrl.split(",").map(Number);
        }

        if (productTypeFromUrl) {
            defaultFilters.productTypes = productTypeFromUrl.split(",");
        }

        setFilters(defaultFilters);
    }, [searchParams]);

    return (
        <div style={{ backgroundColor: "#EDE8D0", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div id="page-contents" style={{ display: "flex", minHeight: "100vh" }}>
                <div id="filters-bar" style={{ minHeight: "100px", display: "flex", justifyContent: "center", gap: "20px", color: "black", backgroundColor: "#e2c9abff", fontFamily: "Georgia, serif", width: 300}}>
                    <FiltersBar filters={filters} setFilters={setFilters}></FiltersBar>
                </div>

                <div id="products" style={{ minHeight: "100vh "}}>
                    <ProductsByCategory filters={filters}></ProductsByCategory>
                </div>
            </div>
            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}