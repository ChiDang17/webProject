import { FooterBar } from "@/components/FooterBar";
import { HeaderBar } from "@/components/HeaderBar";

export default function specific_product() {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh"}}>
            <div id="header-bar">
                <HeaderBar></HeaderBar>
            </div>
            <div id="product-info" style={{ minHeight: "100vh", top: 100, display: "flex", alignItems: "center", justifyContent: "center", gap: "250px"}}>
                <div className="product-picture" style={{ height: 550, width: 550, position: "relative"}}>
                    <img src="/images/example-product.jpg"/>
                </div>
                <div id="product-text">
                    <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 25, left: "25px" }}>Example Product Name</p>
                    <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 20, left: "25px" }}>Price</p>
                    <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 15, left: "25px" }}>Product Description</p>
                </div>
            </div>
            <div id="footer" style={{ minHeight: "50px" }}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}
