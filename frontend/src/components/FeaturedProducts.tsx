import React from "react";
import { HomepageCard } from "./HomepageCard";
import Link from "next/link";


export const FeaturedProducts = () => {
    return (
        <div style={{ position: "relative", top: 25}}>
            <p style={{ color: "black", fontFamily: "Georgia, serif", fontSize: 25, position: "relative", left: "25px" }}>Featured Products:</p>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <Link href={`/specific_product`}>
                        <HomepageCard></HomepageCard>
                    </Link>
                </div>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <Link href={`/specific_product`}>
                        <HomepageCard></HomepageCard>
                    </Link>
                </div>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <Link href={`/specific_product`}>
                        <HomepageCard></HomepageCard>
                    </Link>
                </div>
                <div className="card-row" style={{ padding: "30px", textAlign: "justify", display: "inline-block"}}>
                    <Link href={`/specific_product`}>
                        <HomepageCard></HomepageCard>
                    </Link>
                </div>
        </div>
    )
}