import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mission from "./components/Mission.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Team from "./components/Team.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import DeploymentSection from "./components/Deployment.jsx";
import Awards from "./components/Awards.jsx";



function App(){
    return (
        <div className="font-sans">
            <Navbar />
            <Hero />
            <Mission />
            <DeploymentSection />
            <Awards />
            <Team />
            <CTA />
            <Footer />
        </div>
    );
};

export default App;