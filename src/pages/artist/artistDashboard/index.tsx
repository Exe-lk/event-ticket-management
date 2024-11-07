import React from 'react'
import PROFNAV from "@/components/profNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image3 from "../../../../public/assets/image3.png";
import image2 from "../../../../public/assets/image2.png";

function ArtistDashboard() {
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
    <main className="container-fluid h-full">
      <PROFNAV />

      <div className='flex justify-center content-center flex-col sm:flex-row py-4 mt-10 bg-black'>
        <div className='w-full sm:w-3/5 pt-10 py-3 px-4'>
          <div className="flex flex-col sm:flex-row">
            <input 
              type="text" 
              className="w-full sm:w-9/12 border p-3 rounded-s-3xl mb-4 sm:mb-0"
              placeholder="Search for events, artists, ..." 
            />
            <button
              className="w-full sm:w-3/12 text-black py-3 rounded-sm font-semibold"
              style={{ backgroundColor: "#00C853" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='relative h-auto w-full'>
        <Image
          src={image2}
          alt="Image"
          className="object-cover w-full"
        />
        <div className="absolute bottom-3 w-full flex justify-around text-white text-xl sm:text-3xl font-bold">
          <span onClick={handlecreateNFT} className="cursor-pointer hover:underline">Create NFT’s</span>
          <span onClick={handleViewNFT} className="cursor-pointer hover:underline">View NFT's</span>
          <span onClick={ViewEvents} className="cursor-pointer hover:underline">Events</span>
          <span className="cursor-pointer hover:underline">Fans</span>
          <span className="cursor-pointer hover:underline">Artists</span>
        </div>
      </div>

      <div className='flex justify-center h-auto w-full mt-10'>
        <div className="flex justify-center gap-6 w-full sm:w-3/4">
          
          <div className="flex flex-col items-center text-center w-72">
            <div className="w-full flex justify-center mb-4">
              <Image
                src={image3}
                alt="Image"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold">NFT 1</span>
            <span className="text-sm font-semibold">By Janith P</span>
          </div>
          <div className="flex flex-col items-center text-center w-72">
            <div className="w-full flex justify-center mb-4">
              <Image
                src={image3}
                alt="Image"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold">NFT 2</span>
            <span className="text-sm font-semibold">By Janith P</span>
          </div>
          <div className="flex flex-col items-center text-center w-72">
            <div className="w-full flex justify-center mb-4">
              <Image
                src={image3}
                alt="Image"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold">NFT 3</span>
            <span className="text-sm font-semibold">By Janith P</span>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ArtistDashboard;
