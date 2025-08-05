import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";
import { ProductCard } from "@/components/ProductCard";
import { ProductsByCategory } from "@/components/ProductsByCategory";
import Link from "next/link";

export default function list_of_products() {
    return (
        <div style={{ backgroundColor: "#EDE8D0", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div id="products" style={{ minHeight: "100vh "}}>
                <ProductsByCategory></ProductsByCategory>
            </div>
            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}