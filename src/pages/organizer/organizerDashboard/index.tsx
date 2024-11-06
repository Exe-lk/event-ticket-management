// import React from 'react'
// import PROFNAV from "@/components/profNav";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import image1 from "../../../../public/assets/image1.png";
// import image2 from "../../../../public/assets/image2.png";

// function OrganizerDashboard() {
//   const router = useRouter();
//   const OrgHome = async () => {
//     router.push("/organizer/organizerHome");
//   };
//   const OrgViewEvent = async () => {
//     router.push("/organizer/organizerDashboard");
//   };
//   const OrgCreateEvent = async () => {
//     router.push("/organizer/organizerCreateEvent");
//   };

//   return (
//     <main className="container-fluid h-100">
//       <PROFNAV />

//       <div className='flex-row py-4 mt-10 flex content-center justify-center' style={{ backgroundColor: "#000000"}}>
//         <div className='w-3/5 pt-10 py-3'>
//         <div className="">
//           <input type="text" className="w-9/12 border p-3 rounded-s-3xl" placeholder="Search fot events, artists, ..."/>
//           <button
//             className="w-3/12 text-black py-3 rounded-sm font-semibold"
//             style={{ backgroundColor: "#00C853" }}
//           >
//             Search
//           </button>
//           </div>
//         </div>
//       </div>

//       <div className='relative h-auto w-full'>
//         <Image
//           src={image2}
//           alt="Image"
//           className="object-contain"
//         />
//         <div className="absolute bottom-3 w-full flex justify-around text-white text-3xl font-bold">
//           <span onClick={OrgHome}>Home</span>
//           <span onClick={OrgViewEvent}>Scheduled Events</span>
//           <span onClick={OrgCreateEvent}>Create an Event</span>
//           <span>Tickets</span>
//         </div>
//       </div>

//       <div className='flex-row h-auto w-full mt-10 flex content-center justify-center'>
//         <div className="flex items-center justify-between w-3/4">
          
//         </div>
//       </div>

//       <div className='flex-row h-auto w-full mt-10 flex content-center justify-center'>
//         <div className="flex items-center justify-center w-3/4 p-2" style={{ backgroundColor: "#A3A3A3"}}>
//           <div className="flex justify-cnter items-center w-full">
//             <div className="text-lg font-bold w-full p-2 flex justify-around items-center">
//               <span>Event ID</span>
//               <span>Name</span>
//               <span>xxxxxx</span>
//               <div className="flex justify-around items-center w-1/4">
//                 <button
//                     type="submit"
//                     className="w-2/5 rounded-md px-3 py-1 text-md font-semibold text-black"
//                     style={{ backgroundColor: "#D9D9D9"}}
//                 >
//                     Edit
//                 </button>
//                 <button
//                     type="submit"
//                     className="w-2/5 rounded-md px-3 py-1 text-md font-semibold text-black"
//                     style={{ backgroundColor: "#D9D9D9"}}
//                 >
//                     View
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </main>
//   );
// }

// export default OrganizerDashboard
