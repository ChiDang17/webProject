import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";

export default function HomePage() {
    return (
        <div style={{ backgroundColor: "#f7f3deff", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>

            <div id="main-picture">

            </div>

            <div id="shop-by-category">

            </div>

            <div id="featured-products" style={{ minHeight: "100vh "}}>
                <FeaturedProducts></FeaturedProducts>
            </div>

            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}