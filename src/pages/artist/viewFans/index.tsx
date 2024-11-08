import React from 'react';
import PROFNAV from "@/components/profNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo2 from "../../../../public/assets/profile.jpeg";
import image2 from "../../../../public/assets/image2.png";

function ViewFans() {
    const router = useRouter();
    const handlecreateNFT = async () => {
      router.push("/artist/createNFT");
    };
    const handleViewNFT = async () => {
      router.push("/artist/viewNFT");
    };
    const ViewEvents = async () => {
      router.push("/artist/viewEvents");
    };

  return (
    <main className="container-fluid">
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

      <div className="relative h-auto w-full">
        <Image
          src={image2}
          alt="Image"
          className="object-contain w-full"
        />
        <div className="absolute bottom-3 w-full flex justify-around text-white text-xl sm:text-3xl font-bold">
          <span onClick={handlecreateNFT} className="cursor-pointer hover:underline">Create NFT’s</span>
          <span onClick={handleViewNFT} className="cursor-pointer hover:underline">View NFT's</span>
          <span onClick={ViewEvents} className="cursor-pointer hover:underline">Events</span>
          <span className="cursor-pointer hover:underline">Fans</span>
          <span className="cursor-pointer hover:underline">Artists</span>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-10 justify-center items-center'>
        <div className="flex flex-wrap justify-between w-full sm:w-11/12">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="w-full sm:w-1/4 p-4">
              <div className="text-lg font-bold flex-row justify-center content-center py-3 rounded-md" style={{backgroundColor: "#A3A3A3"}}>
                <div className="flex justify-center items-center">
                  <Image
                    src={logo2}
                    alt="Event Image"
                    width={100}
                    height={100}
                    className="object-contain rounded-full"
                  />
                </div>
                <div className='flex justify-center content-center'>
                  <div className='flex-row w-9/12'>
                    <div className="flex justify-start items-center mt-5">
                      <span className="text-xl font-bold">Kalum M</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-md font-semibold">kalum@email.com</span>
                    </div>
                    <div className="flex justify-start items-center mt-2 gap-2">
                      <Image
                        src={logo2}
                        alt="Event Image"
                        width={30}
                        height={30}
                        className="object-contain rounded-full"
                      />
                      <span className="text-sm font-semibold">Producers #2030</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}

export default ViewFans;
