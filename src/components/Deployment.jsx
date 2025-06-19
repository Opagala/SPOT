import React from "react";
import opaImg from "../assets/Opa.jpg"; 

const DeploymentSection = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            DEPLO.<span className="text-[#1EA1F2]">YMENT</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our deployment process is streamlined to ensure speed, efficiency, and security. 
            With automated workflows and real-time monitoring, your solutions are always launched 
            with confidence and precision. Empower your infrastructure with our modern deployment pipeline.
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
