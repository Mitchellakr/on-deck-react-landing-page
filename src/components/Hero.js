import React from "react";
import Capterra from "../images/CapterraLogo.svg"
import Alternative from "../images/AlternativeToLogo.svg"
import heroimage from "../images/HeroImage.png"

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content grid">
                    <div className="copy flex-cl">
                        <h1>Ondeck is your remote <span>conference calling tool</span></h1>
                        <p>Ondeck is a service that allows you to create beautiful, online, and encrypted video calls for you and your team.</p>
                        <a href="#" className="primary-btn">Try for free</a>
                        <div className="ratings flex">
                            <p>5.0 Rating based on revies from:</p>
                            <img src={Capterra} alt="alternative" />
                            <img src={Alternative} alt="alternative" />
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroimage} alt="hero image" className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}