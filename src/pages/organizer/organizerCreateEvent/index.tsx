import React from 'react'
import PROFNAV from "@/components/profNav";
import { useRouter } from "next/navigation";
import { LuUpload } from "react-icons/lu";

function OrganizerCreateEvent() {
  const router = useRouter();
  const OrgViewEvent = async () => {
    router.push("/organizer/organizerDashboard");
  };

  return (
    <main className="container-fluid h-100">
      <PROFNAV />

      <div className='flex-row py-4 mt-10 flex content-center justify-center' style={{ backgroundColor: "#000000"}}>
        <div className='w-3/5 pt-10 py-3'>
          <div className="">
            <input type="text" className="w-9/12 border p-3 rounded-s-3xl" placeholder="Search for events, artists, ..." />
            <button
              className="w-3/12 text-black py-3 rounded-sm font-semibold"
              style={{ backgroundColor: "#00C853" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='flex-row h-auto w-full mt-10 flex content-center justify-center'>
        <div className="flex items-center justify-center w-3/4">
          <div className="text-lg font-semibold p-8 shadow-md" style={{ backgroundColor: "#D9D9D9"}}>
            <div className="flex justify-center items-center">
              <LuUpload />
            </div>
            <div className="flex justify-center items-center">
              <span>Upload a thumbnail</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-row h-auto w-full mt-10 content-center justify-center'>
        <div className="flex items-center justify-center w-full md:w-full">
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-6 w-3/4 px-8">
            <div className="font-semibold mb-3">
              <input
                id="name"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Event Name'
              />
            </div>
            <div className="font-semibold mb-3">
              <input
                id="date"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Date'
              />
            </div>
            <div className="font-semibold mb-3">
              <input
                id="time"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Time'
              />
            </div>
            <div className="font-semibold mb-3">
              <input
                id="location"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Location'
              />
            </div>
            <div className="font-semibold mb-3">
              <input
                id="ticket-price"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Ticket Price'
              />
            </div>
            <div className="font-semibold mb-3">
              <input
                id="artists"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Artists'
              />
            </div>
            <div className="font-semibold mb-8">
              <input
                id="contact-details"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Contact Details'
              />
            </div>
            <div className="font-semibold mb-8">
              <input
                id="comments"
                type="text"
                required
                className="w-full px-3 pt-2 pb-2 text-black shadow-sm border-2 rounded-lg"
                placeholder='Any other comments'
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-3">
          <div className="text-lg font-bold flex items-center justify-end w-3/4">
            <div className="font-semibold w-10/12 mb-8 flex justify-end items-bottom">
              <button
                type="submit"
                className="w-2/6 rounded-md px-3 py-1 text-md font-semibold text-black shadow-sm"
                style={{ backgroundColor: "#00C853" }}
                onClick={OrgViewEvent}
              >
                Place Event
              </button>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}

export default OrganizerCreateEvent;
