import { CategoriesBar } from "@/components/CategoriesBar";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";
import { HomepageBanner } from "@/components/HomepageBanner";
import { ShopByCategory } from "@/components/ShopByCategory"

export default function HomePage() {
    return (
        <div style={{ backgroundColor: "#EDE8D0", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div id="homepage-banner">
                <HomepageBanner></HomepageBanner>
            </div>
            <div id="shop-by-category" style={{ minHeight: "100vh "}}>
                <ShopByCategory></ShopByCategory>
            </div>
            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}