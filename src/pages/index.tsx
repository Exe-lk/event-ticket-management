import Image from "next/image";
import React from 'react';
import image1 from "../../public/assets/image1.png";
import NIV from "@/components/niv";

export default function LandingPage() {
  return (
    <main className="container-fluid h-100">
      <NIV />

      <div className='flex flex-col md:flex-row py-4 mt-10 justify-center' style={{ backgroundColor: "#000000" }}>
        <div className='w-full md:w-3/5 pt-4 md:pt-10 px-3'>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <input
              type="text"
              className="w-full md:w-9/12 border p-3 rounded-md md:rounded-s-3xl"
              placeholder="Search for events, artists, ..."
            />
            <button
              className="w-full md:w-3/12 text-black py-3 rounded-md md:rounded-sm font-semibold"
              style={{ backgroundColor: "#00C853" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap h-auto w-full mt-10 justify-center space-y-8 md:space-y-0'>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 space-y-8 md:space-y-0 md:space-x-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-lg font-bold flex flex-col items-center space-y-2">
              <div className="flex justify-center items-center">
                <Image
                  src={image1}
                  alt="Logo"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <div className="mt-3 text-xl font-semibold">AHAS YAATHRA</div>
                <div className="text-sm font-semibold">9, October 2024</div>
                <div className="text-sm font-semibold">7.00 pm</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap h-auto w-full mt-10 justify-center space-y-8 md:space-y-0'>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 space-y-8 md:space-y-0 md:space-x-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-lg font-bold flex flex-col items-center space-y-2">
              <div className="flex justify-center items-center">
                <Image
                  src={image1}
                  alt="Logo"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <div className="mt-3 text-xl font-semibold">AHAS YAATHRA</div>
                <div className="text-sm font-semibold">9, October 2024</div>
                <div className="text-sm font-semibold">7.00 pm</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
