"use client"
import axios from "axios";
import React from "react"


import { useEffect, useState } from "react";

type Banner = {
  id: string;
  url: string;
};

export const HomepageBanner = () => {
    const [banner, setBanner] = useState<Banner>();

    useEffect(() => {
        axios
            .get<Banner>("http://localhost:8080/api/banners").then((response) => {
                setBanner(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!banner) {
        return <p>Loading banner...</p>;
    }

    return (
        <a href={`/list_of_products`}>
            <img src={banner.url} style={{ width: "100%" }} />
        </a>
    )

}