import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mission from "./components/Mission.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Impact from "./components/Impact.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import DeploymentSection from "./components/Deployment.jsx";



function App(){
    return (
        <div className="font-sans">
            <Navbar />
            <Hero />
            <Mission />
            <DeploymentSection />
            <Impact />
            <CTA />
            <Footer />
        </div>
    );
};

export default App;