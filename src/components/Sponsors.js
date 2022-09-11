import React from "react";
import netflix from "../images/netflixlogo.svg";
import shopify from "../images/shopifylogo.svg";
import spotify from "../images/spotifylogo.svg";
import walmart from "../images/walmartlogo.svg";

export default function Sponsors() {
    return (
        <section className="sponsors-section">
            <div className="container">
                <div className="sponsors-content flex">
                    <p>Trusted by 3+ million at companies like</p>
                    <div className="sponsors grid">
                        <img src={netflix} alt="netflix" />
                        <img src={shopify} alt="shopify" />
                        <img src={spotify} alt="spotify" />
                        <img src={walmart} alt="walmart" />
                    </div>
                </div>
            </div>
        </section>
    );
}