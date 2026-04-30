import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import FeaturePackages from "../components/FeaturePackages";


function Home() {
    return (
        <>
        
        <div className="home">
            <Hero />
            <FeaturePackages />
            <Footer />
        </div>
        </>
    )
}

export default Home;