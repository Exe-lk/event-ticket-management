import Image from "next/image";
import React from 'react'
import image1 from "../../../../public/assets/image1.png";
import PROFNAV from "@/components/profNav";

function ArtistViewEvents() {
  return (
    <main className="container-fluid h-auto">
      <PROFNAV />

      <div className="flex flex-col items-center py-4 mt-10" style={{ backgroundColor: "#000000" }}>
        <div className="w-11/12 sm:w-3/5 pt-10 py-3">
          <div className="flex w-full">
            <input
              type="text"
              className="w-full sm:w-9/12 border p-3 rounded-s-3xl"
              placeholder="Search for events, artists, ..."
            />
            <button
              className="w-2/5 sm:w-3/12 text-black py-3 rounded-sm font-semibold"
              style={{ backgroundColor: "#00C853" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center content-center">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-around mt-10 sm:gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col items-start w-full sm:w-3/4 md:w-1/3 lg:w-1/4 text-lg font-bold">
              <div className="flex justify-center items-center">
                <Image
                  src={image1}
                  alt="Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-start items-start mt-5">
                <span className="text-xl font-semibold">AHAS YAATHRA</span>
              </div>
              <div className="flex justify-start items-start mt-2">
                <span className="text-sm font-semibold">9, October 2024</span>
              </div>
              <div className="flex justify-start items-start mt-1 mb-5">
                <span className="text-sm font-semibold">7.00 pm</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center content-center">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-around mt-10 sm:gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col items-start w-full sm:w-3/4 md:w-1/3 lg:w-1/4 text-lg font-bold">
              <div className="flex justify-center items-center">
                <Image
                  src={image1}
                  alt="Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-start items-start mt-5">
                <span className="text-xl font-semibold">AHAS YAATHRA</span>
              </div>
              <div className="flex justify-start items-start mt-2">
                <span className="text-sm font-semibold">9, October 2024</span>
              </div>
              <div className="flex justify-start items-start mt-1 mb-5">
                <span className="text-sm font-semibold">7.00 pm</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ArtistViewEvents;
