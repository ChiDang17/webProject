import React from "react"
import { CategoriesBar } from "./CategoriesBar";
import { useRouter } from "next/navigation";

export const HeaderBar = () => {
    const router = useRouter();

    return (
        <div style={{display:"inline-block"}}>
            <div className="categories">
                <CategoriesBar></CategoriesBar>
            </div>

            <div className="logo">
                <img
                    src="frontend/public/images/logo.png"
                    alt="logo"
                    onClick={() => router.push("/homepage")}
                >
                </img>x
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>

            <div className="other-buttons">
                <button className="cart-button"></button>
            </div>
        </div>
    )
}