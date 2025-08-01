import { CategoriesBar } from "@/components/CategoriesBar";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";
import { HomepageBanner } from "@/components/HomepageBanner";
import { SecondHomepageBanner } from "@/components/SecondHomepageBanner";
import { ShopByCategory } from "@/components/ShopByCategory"
import { ShopByMetal } from "@/components/ShopByMetal";

export default function HomePage() {
    return (
        <div style={{ backgroundColor: "#EDE8D0", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div id="homepage-banner">
                <HomepageBanner></HomepageBanner>
            </div>
            <div id="shop-by-category" style={{ paddingBottom: 100, paddingTop: 10}}>
                <ShopByCategory></ShopByCategory>
            </div>
             <div id="second-homepage-banner" style={{ paddingTop: 10 }}>
                <SecondHomepageBanner></SecondHomepageBanner>
            </div>
            <div id="shop-by-metal" style={{ paddingBottom: 100, paddingTop: 10 }}>
                <ShopByMetal></ShopByMetal>
            </div>
            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}