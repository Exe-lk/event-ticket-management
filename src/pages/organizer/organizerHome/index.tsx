import React from 'react'
import PROFNAV from "@/components/profNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image1 from "../../../../public/assets/image1.png";
import image2 from "../../../../public/assets/image2.png";

function OrganizerHome() {
  const router = useRouter();
  const OrgHome = async () => {
    router.push("/organizer/organizerHome");
  };
  const OrgViewEvent = async () => {
    // router.push("/organizer/organizerDashboard");
  };
  const OrgCreateEvent = async () => {
    router.push("/organizer/organizerCreateEvent");
  };

  return (
    <main className="container-fluid">
      <PROFNAV />

      <div className='flex-row py-4 mt-10 flex content-center justify-center' style={{ backgroundColor: "#000000" }}>
        <div className='w-full sm:w-3/5 pt-10 py-3'>
          <div className="flex">
            <input type="text" className="w-9/12 sm:w-10/12 border p-3 rounded-s-3xl" placeholder="Search for events, artists, ..." />
            <button
              className="w-3/12 sm:w-2/12 text-black py-3 rounded-sm font-semibold"
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
          <span onClick={OrgHome} className="cursor-pointer">Home</span>
          <span onClick={OrgViewEvent} className="cursor-pointer">Scheduled Events</span>
          <span onClick={OrgCreateEvent} className="cursor-pointer">Create an Event</span>
          <span>Tickets</span>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-10 justify-center items-center'>
        <div className="flex flex-wrap justify-between w-full sm:w-10/12">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="w-full sm:w-1/3 p-4">
              <div className="text-lg font-bold flex-row justify-center content-center">
                <div className="flex justify-center items-center">
                  <Image
                    src={image1}
                    alt="Event Image"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className='flex justify-center content-center'>
                  <div className='flex-row w-3/4'>
                    <div className="flex justify-start items-center mt-5">
                      <span className="text-xl font-semibold">AHAS YAATHRA</span>
                    </div>
                    <div className="flex justify-start items-center mt-1">
                      <span className="text-sm font-semibold">9, October 2024</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-semibold">7.00 pm</span>
                      <a
                        className="text-black hover:text-white px-8 py-1 rounded-xl text-xs text-center font-bold"
                        style={{ backgroundColor: "#00C853" }}
                        // onClick={OrgViewEvent}
                      >
                        View
                      </a>
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

export default OrganizerHome;
