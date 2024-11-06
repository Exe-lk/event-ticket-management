import Image from "next/image";
import router from "next/router";
import React, { useState } from 'react';
import logo1 from "../../public/assets/TicketLeap.png";
import Link from "next/link";

export default function Niv() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    router.push("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: "#000000", position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className="flex items-center">
            <Image
              src={logo1}
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end space-x-4 text-white">
            <Link href="/" className="text-xl font-semibold hover:text-gray-300">
              How It Works
            </Link>
            <Link href="/" className="text-xl font-semibold hover:text-gray-300">
              Features
            </Link>
            <Link href="/signup" className="text-xl font-semibold hover:text-gray-300">
              Register
            </Link>
            <button
              onClick={handleClick}
              className="bg-white text-black hover:bg-gray-700 hover:text-white w-24 px-2 py-1 rounded-lg font-bold"
            >
              Sign In
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pt-4 pb-4 text-white bg-black">
            <Link href="/" className="text-xl font-semibold hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="/" className="text-xl font-semibold hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link href="/signup" className="text-xl font-semibold hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Register
            </Link>
            <button
              onClick={() => {
                handleClick();
                setIsMenuOpen(false);
              }}
              className="bg-white text-black hover:bg-gray-700 hover:text-white w-24 px-2 py-1 rounded-lg font-bold"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
