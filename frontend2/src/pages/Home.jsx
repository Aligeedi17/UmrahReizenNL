import React from "react";
import Hero from "../components/Hero";
import FeaturePackages from "../components/FeaturePackages";


function Home() {
    return (
        <>
        
        <div className="home">
            <Hero />
            <FeaturePackages />
        </div>
        </>
    )
}

export default Home;