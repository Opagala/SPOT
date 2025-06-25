import React from "react";
import opaImg from "../assets/Opa.jpg"; 

const DeploymentSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#002D6D]  mb-4">
            DEPLO<span className="text-[#1EA1F2]">YMENT</span>
          </h2>
          <p className="text-[#002D6D] font-bold leading-relaxed">
              Our hotspot deployment strategy ensures seamless internet connectivity across diverse environments. 
            From site surveys and signal planning to the installation of access points and secure network configuration, 
            we deliver reliable, high-speed internet access where it's needed most. Whether urban or rural, 
            our solutions scale with your coverage goals, backed by real time monitoring and proactive support.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img 
            src={opaImg} 
            alt="Deployment Illustration" 
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
