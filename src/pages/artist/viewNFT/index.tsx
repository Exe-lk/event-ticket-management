import React from 'react'
import PROFNAV from "@/components/profNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image3 from "../../../../public/assets/image3.png";
import { FiEye } from "react-icons/fi";

function ViewNFT() {
  const router = useRouter();
  const UpdateNFT = async () => {
    router.push("/artist/updateNFT");
  };

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

      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div className="w-full sm:w-3/4 bg-gray-300 p-4 ps-5 pe-5 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between rounded-lg">
            <div className="flex justify-center items-center mb-4 sm:mb-0">
              <Image
                src={image3}
                alt="Image"
                width={50}
                height={50}
                className="object-contain rounded-full"
              />
            </div>
              <span className="block font-semibold">Producers #2030</span>
              <span className="block font-semibold">83E7BE</span>
              <span className="block font-semibold">0.0205 ETH</span>
            <div className="flex justify-center items-center gap-3 sm:mt-0">
              <FiEye onClick={UpdateNFT} className="cursor-pointer" />
              <span
                onClick={UpdateNFT}
                className="cursor-pointer font-semibold"
              >
                View
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ViewNFT;
