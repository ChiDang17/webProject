import { CategoriesBar } from "@/components/CategoriesBar";
import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";
import { HomepageBanner } from "@/components/HomepageBanner";
import { SecondHomepageBanner } from "@/components/SecondHomepageBanner";
import { ShopByCategory } from "@/components/ShopByCategory"
import { ShopByMetal } from "@/components/ShopByMetal";

export default function HomePage() {
    return (
        <div className="page-container">
                <div id="header-bar">
                    <HeaderBar></HeaderBar>
                </div>
                <div id="homepage-banner">
                    <HomepageBanner></HomepageBanner>
                </div>
                <div className="shop-by-category">
                    <ShopByCategory></ShopByCategory>
                </div>
                <div className="second-homepage-banner">
                    <SecondHomepageBanner></SecondHomepageBanner>
                </div>
                <div className="shop-by-metal">
                    <ShopByMetal></ShopByMetal>
                </div>
                <div className="footer">
                    <FooterBar></FooterBar>
                </div>
        </div>
        
    )
}