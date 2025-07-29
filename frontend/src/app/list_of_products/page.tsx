import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

export default function list_of_products() {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div id="products" style={{ minHeight: "100vh "}}>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <Link href={`/specific_product`}>
                        <ProductCard></ProductCard>
                    </Link>
                </div>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <Link href={`/specific_product`}>
                        <ProductCard></ProductCard>
                    </Link>
                </div>
            </div>
            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}