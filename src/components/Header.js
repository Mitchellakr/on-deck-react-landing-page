import React from 'react';
import logo from "../images/logo.svg";
import Navigation from './Navigation';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-content flex">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <Navigation/>
                </div>
            </div>
        </header>
    );
}