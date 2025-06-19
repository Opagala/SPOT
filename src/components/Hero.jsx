import React, { useState, useEffect } from "react";
import zeta1Img from "../assets/Zeta1.jpg";
import claycityImg from "../assets/Clay City.png";
import zetaspottowerImg from "../assets/ZetaSpot Tower.png";

const slides = [
  {
    type: "image",
    src: zeta1Img,
    heading: "Connecting Remote Communities",
    text: "Reliable internet for education, business, and growth.",
  },
  {
    type: "image",
    src: claycityImg,
    heading: "Empowering the Underserved",
    text: "Hotspots tailored to fit every community’s needs.",
  },
  {
    type: "image",
    src: zetaspottowerImg,
    heading: "Affordable Access for All",
    text: "Because everyone deserves a chance to connect.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full text-white flex items-center justify-center overflow-hidden">
      <img
        className="absolute w-full h-full object-cover"
        src={slide.src}
        alt="Hero Slide"
      />
      <div className="z-10 text-center px-4 bg-black/50 rounded-xl p-6 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h1>
        <p className="text-lg md:text-xl mb-6">{slide.text}</p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
