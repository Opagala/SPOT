import React from "react";
import award1Img from "../assets/Award1.jpg";
import award2Img from "../assets/Award2.jpg";
import award3Img from "../assets/Award3.jpg";
import award4Img from "../assets/Award4.jpg";
import award5Img from "../assets/Award5.jpg";
import award6Img from "../assets/Award6.jpg";
import award7Img from "../assets/Award7.jpg";

const Awards = () => {
  return (
    <section className="py-16 px-6 bg-[#FFFFFF] text-white text-center">
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Celebrating Excellence
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                ZETA SPOT proudly emerged as <span className="font-semibold text-black">1st Runners-Up</span> at the
                prestigious <span className="text-black">Connected Africa Summit</span>. This recognition fuels our
                passion to empower underserved communities with smart connectivity solutions.
              </p>
              <p className="mt-2 text-lg text-gray-700">
                This award is just the beginning—more innovations are on the horizon!
              </p>
            </div>

            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={award1Img}
                            alt="Award Image 1"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={award2Img}
                            alt="Award Image 2"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={award3Img}
                            alt="Award Celebration"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={award4Img}
                            alt="ZETA Team"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={award5Img}
                            alt="Innovation"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid  grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={award6Img}
                            alt="Connected Summit"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={award7Img}
                            alt="Future Vision"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
