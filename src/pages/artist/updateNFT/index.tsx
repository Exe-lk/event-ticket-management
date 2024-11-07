import React from 'react'
import PROFNAV from "@/components/profNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image3 from "../../../../public/assets/image3.png";

function UpdateNFT() {
  const router = useRouter();
  const handleViewNFT = async () => {
    router.push("/artist/viewNFT");
  };

  return (
    <main className="container-fluid h-auto">
      <PROFNAV />

      <div className='flex flex-col sm:flex-row py-4 mt-10 bg-black justify-center items-center'>
        <div className='w-11/12 sm:w-3/5 pt-10 py-3'>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <input 
              type="text" 
              className="w-full sm:w-9/12 border p-3 rounded-s-3xl mb-4 sm:mb-0" 
              placeholder="Search for events, artists, ..."
            />
            <button
              className="w-full sm:w-3/12 text-black py-3 rounded-sm font-semibold mt-4 sm:mt-0"
              style={{ backgroundColor: "#00C853" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 w-full">
        <div className="text-lg font-bold text-center">
          <div className="text-2xl font-semibold mb-5">
            <span>NFT 1 by Shehan M</span>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={image3}
              alt="Image"
              width={100}
              height={100}
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/5">
          <div className="font-semibold w-full md:w-5/12 mb-5 flex justify-between items-center">
            <span>NFT Name:</span>
            <span className="font-bold">NFT1</span>
          </div>
          <div className="font-semibold w-full md:w-5/12 mb-5 flex justify-between items-center">
            <span>NFT Type:</span>
            <span className="font-bold">type1</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/5">
          <div className="font-semibold w-full md:w-5/12 mb-5 flex justify-between items-center">
            <span>Creator:</span>
            <span className="font-bold">Shehan M</span>
          </div>
          <div className="font-semibold w-full md:w-5/12 mb-5 flex justify-between items-center">
            <span>Price:</span>
            <span className="font-bold">200usd</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/5">
          <div className="font-semibold w-full md:w-5/12 mb-5 flex justify-between items-center">
            <span>Token ID:</span>
            <span className="font-bold">#2030</span>
          </div>
          <div className="font-semibold w-full md:w-5/12 mb-5 flex justify-between items-center">
            <span>Description:</span>
            <span className="font-bold">lorem ipsum</span>
          </div>
        </div>

        <div className="flex items-center justify-start w-full md:w-3/5 mt-5">
          <div className="font-semibold w-full md:w-10/12 mb-5 flex justify-between items-top">
            <span>Copyright Information:</span>
            <span className="w-full md:w-7/12">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
          </div>
        </div>

        <div className="flex items-center justify-center mt-5 w-full md:w-3/5">
          <div className="flex w-full justify-around">
            <button
              type="submit"
              className="w-full md:w-1/3 rounded-md mt-5 px-3 py-1 text-md font-semibold text-black shadow-md"
              style={{ backgroundColor: "#00C853" }}
              onClick={handleViewNFT}
            >
              Update
            </button>
            <button
              type="submit"
              className="w-full md:w-1/3 rounded-md mt-5 px-3 py-1 text-md font-semibold text-black shadow-md"
              style={{ backgroundColor: "#FF0000" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UpdateNFT;
