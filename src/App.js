import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';

import './index.css'

export default function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Sponsors />
        </div>
    );
}
