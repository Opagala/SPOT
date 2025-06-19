import React from "react";

const steps = [
  { title: "Install Hotspot", description: "We place devices in key community locations." },
  { title: "Community Connects", description: "Locals access Wi-Fi through any device." },
  { title: "Affordable Access", description: "We ensure pricing is accessible and fair." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-[#1EA1F2] font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
