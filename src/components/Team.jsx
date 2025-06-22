import React from "react";
import dsirengoImg from "../assets/D Sirengo.png";
import aokwakauImg from "../assets/A Okwakau.png";
import mopagalaImg from "../assets/M Opagala.png";
import rabanImg from "../assets/Raban.jpg";
import aliiImg from "../assets/Alii.png"

const Team = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-pretty text-[#1EA1F2] sm:text-4xl">Meet Our Team</h2>
          <p className="mt-6 text-lg/8 font-semibold text-[#002D6D]">
            We are a specialized team of network engineers, system integrators, and infrastructure experts dedicated to building and maintaining reliable and secure connectivity solutions for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li>
            <div className="flex items-center gap-x-6">
              <img className="size-16 rounded-full" src={aokwakauImg} alt="" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Abednego Okwakau</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="size-16 rounded-full" src={dsirengoImg} alt="" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Dorcas Sirengo</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Marketing Manager</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Brian Ondiso</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Data Analyst / Finance</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="size-16 rounded-full" src={mopagalaImg} alt="" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Robert Maina</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Software Developer</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="size-16 rounded-full" src={rabanImg} alt="" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Raban Kirimi</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Electrical Engineer</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="size-16 rounded-full" src={aliiImg} alt="" />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Alex Alii</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Technical Engineer</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
