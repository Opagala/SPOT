import React from "react";
import dsirengoImg from "../assets/D Sirengo.png";
import aokwakauImg from "../assets/A Okwakau.png";
import mopagalaImg from "../assets/M Opagala.png";
import rabanImg from "../assets/Raban.jpg";
import aliiImg from "../assets/Alii.png"

const Impact = () => {
  return (
    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold tracking-tight text-pretty text-[#1EA1F2] sm:text-4xl">Meet our Team</h2>
      <p class="mt-6 text-lg/8 font-semibold text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full" src={aokwakauImg} alt="" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Abednego Okwakau</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full" src={dsirengoImg} alt="" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Dorcas Sirengo</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">Marketing Manager</p>
          </div>
        </div>
      </li> 
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">CTO</p>
          </div>
        </div>
      </li> 
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full" src={mopagalaImg} alt="" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Meshack Opagala</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">Software Deve</p>
          </div>
        </div>
      </li> 
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full" src={rabanImg} alt="" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Raban Kirimi</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">Electrical Engineer</p>
          </div>
        </div>
      </li> 
      <li>
        <div class="flex items-center gap-x-6">
          <img class="size-16 rounded-full" src={aliiImg} alt="" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">ALex Alii</h3>
            <p class="text-sm/6 font-semibold text-indigo-600">Technical Engineer</p>
          </div>
        </div>
      </li>       
    </ul>
  </div>
</div>

  );
};

export default Impact;
