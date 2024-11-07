// import React from "react";
// import image2 from "../../../public/assets/events.jpg";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import NIV from "@/components/niv";

// function Signup() {
//   const router = useRouter();

//   const handleSignup = async () => {
//     router.push("/customerHome");
//   };

//   return (
//     <main className="relative h-screen w-screen flex">
//     <NIV />

//       <Image
//         src={image2}
//         alt="Signup Background"
//         layout="fill"
//         className="object-cover opacity-50"
//         priority
//       />

//       <div className="relative z-10 w-1/2 h-full flex items-center justify-center ml-auto">
//         <div className="max-w-md w-full px-6 py-12 bg-white shadow-lg rounded-lg text-center">
//           <span className="text-4xl font-bold text-center leading-9">
//             WELCOME
//           </span>

//           <div className="mt-10">
//             <div className="flex items-center space-x-4">
//               <span className="text-md font-semibold leading-9 w-2/5 flex">
//                 First Name
//               </span>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 className="w-3/5 px-3 pt-2 pb-2 text-black shadow-sm border-b-2"
//               />
//             </div>
//             <div className="flex items-center space-x-4 mt-3">
//               <span className="text-md font-semibold leading-9 w-2/5 flex">
//                 Last Name
//               </span>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 className="w-3/5 px-3 pt-2 pb-2 text-black shadow-sm border-b-2"
//               />
//             </div>
//             <div className="flex items-center space-x-4 mt-3">
//               <span className="text-md font-semibold leading-9 w-2/5 flex">
//                 Phone
//               </span>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 className="w-3/5 px-3 pt-2 pb-2 text-black shadow-sm border-b-2"
//               />
//             </div>
//             <div className="flex items-center space-x-4 mt-3">
//               <span className="text-md font-semibold leading-9 w-2/5 flex">
//                 Email
//               </span>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 className="w-3/5 px-3 pt-2 pb-2 text-black shadow-sm border-b-2"
//               />
//             </div>
//             <div className="flex items-center space-x-4 mt-3">
//               <span className="text-md font-semibold leading-9 w-2/5 flex">
//                 Password
//               </span>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 className="w-3/5 px-3 pt-2 pb-2 text-black shadow-sm border-b-2"
//               />
//             </div>
//             <div className="flex items-center space-x-4 mt-3">
//               <span className="text-md font-semibold leading-9 w-2/5 flex">
//                 Confirm Password
//               </span>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 className="w-3/5 px-3 pt-2 pb-2 text-black shadow-sm border-b-2"
//               />
//             </div>
//             <div className="flex items-center space-x-4 mt-3">
//               <span className="text-md font-semibold leading-9 w-2/5 flex">
//                 Registering As
//               </span>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 className="w-3/5 px-3 pt-2 pb-2 text-black shadow-sm border-b-2"
//               />
//             </div>

//             <div className="pt-5">
//               <button
//                 type="submit"
//                 className="w-1/2 rounded-md mt-5 px-3 py-2 text-sm font-bold text-black shadow-sm" 
//                 style={{ backgroundColor: "#00C853"}}
//                 onClick={handleSignup}
//               >
//                 REGISTER
//               </button>
//             </div>

//             <p className="mt-5 text-sm font-semibold text-zinc-600 text-center">
//               Already a member?
//               <a
//                 href="/login"
//                 className="ml-1 text-blue-700 font-bold hover:text-primary-content"
//               >
//                 Login
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Signup;
