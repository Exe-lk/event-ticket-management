import React from 'react'
import PROFNAV from "@/components/profNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image3 from "../../../../public/assets/image3.png";
import image2 from "../../../../public/assets/image2.png";

function CreateNFT() {
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

      <div className='flex flex-col items-center justify-center h-auto w-full mt-10'>
        <div className="text-lg font-bold text-center">
          <div className="text-2xl font-semibold mb-5">
            <span>Create an NFT</span>
          </div>
          <div className="flex justify-center items-center mb-5">
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

      <div className='flex flex-col items-center justify-center w-full mt-10'>
        <div className="w-11/12 sm:w-4/5">
          <div className="flex flex-col sm:flex-row justify-between mb-10">
            <div className="flex justify-between font-semibold w-full sm:w-5/12 mb-4 sm:mb-0">
              <span className="p-2">NFT Name</span>
              <div className='w-2/3 sm:w-1/2 px-3 pt-2 pb-2'>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full text-black shadow-sm border-b-2"
                />
              </div>
            </div>
            <div className="flex justify-between font-semibold w-full sm:w-5/12">
              <span className="p-2">NFT Type</span>
              <div className='w-2/3 sm:w-1/2 px-3 pt-2 pb-2'>
                <input
                  id="type"
                  type="text"
                  required
                  className="w-full text-black shadow-sm border-b-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mb-10">
            <div className="flex justify-between font-semibold w-full sm:w-5/12 mb-4 sm:mb-0">
              <span className="p-2">Creator</span>
              <div className='w-2/3 sm:w-1/2 px-3 pt-2 pb-2'>
                <input
                  id="creator"
                  type="text"
                  required
                  className="w-full text-black shadow-sm border-b-2"
                />
              </div>
            </div>
            <div className="flex justify-between font-semibold w-full sm:w-5/12">
              <span className="p-2">Price</span>
              <div className='w-2/3 sm:w-1/2 px-3 pt-2 pb-2'>
                <input
                  id="price"
                  type="text"
                  required
                  className="w-full text-black shadow-sm border-b-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mb-10">
            <div className="flex justify-between font-semibold w-full sm:w-5/12 mb-4 sm:mb-0">
              <span className="p-2">Token ID</span>
              <div className='w-2/3 sm:w-1/2 px-3 pt-2 pb-2'>
                <input
                  id="tokenID"
                  type="text"
                  required
                  className="w-full text-black shadow-sm border-b-2"
                />
              </div>
            </div>
            <div className="flex justify-between font-semibold w-full sm:w-5/12">
              <span className="p-2">Description</span>
              <div className='w-2/3 sm:w-1/2 px-3 pt-2 pb-2'>
                <input
                  id="description"
                  type="text"
                  required
                  className="w-full text-black shadow-sm border-b-2"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mb-5">
            <div className="flex justify-between font-semibold sm:w-8/12 mb-4 sm:mb-0">
              <span>Copyright Information</span>
              <input
                id="copyright"
                type="text"
                required
                className="w-full sm:w-1/2 px-3 pt-2 pb-2 text-black shadow-sm border-2"
              />
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="w-full sm:w-full rounded-md px-8 py-2 text-md font-semibold text-black shadow-sm"
                style={{ backgroundColor: "#00C853" }}
                onClick={handleViewNFT}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateNFT;
