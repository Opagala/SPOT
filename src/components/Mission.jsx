import React from "react";
import missionImg from "../assets/Mission.jpg";

const Mission = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img src={missionImg} alt="Mission" className="w-full h-screen md:w-1/2 rounded-xl" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#1EA1F2]">Our Mission</h2>
          <p className="text-gray-700 font-semibold text-lg">
           To provide reliable, sustainable, and affordable internet connectivity in underserved areas, empowering businesses and communities to thrive in a connected world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;