import React from 'react';
import NIV from "@/components/niv";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image3 from "../../../public/assets/image3.png";
import image2 from "../../../public/assets/image2.png";

function CustomerNFT() {
  const router = useRouter();
  const handleHome = async () => {
    router.push("/customerHome");
  };

  return (
    <main className="container-fluid">
      <NIV />

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

      <div className="relative h-auto w-full">
        <Image
          src={image2}
          alt="Image"
          className="object-contain w-full"
        />
        <div className="absolute bottom-3 w-full flex justify-around text-white text-xl sm:text-3xl font-bold">
          <span onClick={handleHome}>Home</span>
          <span>Events</span>
          <span>Artists</span>
          <span>NFT</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-10 space-y-6 sm:space-y-0 sm:space-x-6">    
        <div className="flex justify-center content-center">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-around mt-10 sm:gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col items-start w-full sm:w-3/4 md:w-1/3 lg:w-1/4 text-lg font-bold">
              <div className="flex justify-center items-center">
                <Image
                  src={image3}
                  alt="Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-start items-start mt-5">
                <span className="text-xl font-semibold">NFT 3</span>
              </div>
              <div className="flex justify-between items-center mt-2 mb-10 gap-3">
                <span className="text-sm font-semibold">By Janith P</span>
                <a
                  className="text-black hover:text-white px-3 py-1 rounded-xl text-xs text-center font-bold"
                  style={{ backgroundColor: "#00C853" }}
                >
                  BUY NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}

export default CustomerNFT;
