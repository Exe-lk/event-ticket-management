import React from 'react';
import NIV from "@/components/niv";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image1 from "../../../public/assets/image1.png";
import image2 from "../../../public/assets/image2.png";

function CustomerHome() {
  const router = useRouter();

  const handleNFTCustomer = async () => {
    router.push("/customerNFT");
  };

  const gotoBuyTickets = async () => {
    router.push("/buyTickets");
  };

  return (
    <main className="container-fluid h-auto">
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

      <div className='relative w-full'>
        <Image
          src={image2}
          alt="Image"
          className="object-cover w-full h-[100px] sm:h-[500px] md:h-[200px]"
        />
        <div className="absolute bottom-3 w-full flex justify-around text-white text-xl md:text-3xl font-bold">
          <span>Home</span>
          <span>Events</span>
          <span>Artists</span>
          <span onClick={handleNFTCustomer}>NFT</span>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-10 justify-center items-center'>
        <div className="flex flex-wrap justify-between w-full sm:w-3/4">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="w-full sm:w-1/3 p-4">
              <div className="text-lg font-bold">
                <div className="flex justify-center items-center">
                  <Image
                    src={image1}
                    alt="Event Image"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-start items-center mt-5">
                  <span className="text-xl font-semibold">AHAS YAATHRA</span>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-sm font-semibold">9, October 2024</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-semibold">7.00 pm</span>
                  <a
                    className="text-black hover:text-white px-3 py-1 rounded-xl text-xs text-center font-bold"
                    style={{ backgroundColor: "#00C853" }}
                    onClick={gotoBuyTickets}
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CustomerHome;
