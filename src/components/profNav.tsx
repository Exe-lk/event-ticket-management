import Image from "next/image";
import React from 'react';
import logo1 from "../../public/assets/TicketLeap.png";
import logo2 from "../../public/assets/profile.jpeg";

export default function ProfNav() {
  return (
    <nav style={{ backgroundColor: "#000000", position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-16 py-4 md:py-0">
          
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start mb-2 md:mb-0">
            <Image
              src={logo1}
              alt="Logo"
              width={150}
              height={75}
              className="object-contain"
            />
          </div>

          {/* Profile Section */}
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <span className="text-white text-lg md:text-xl font-semibold">Shehan M</span>
            <Image
              src={logo2}
              alt="Profile Image"
              width={50}
              height={50}
              className="object-contain rounded-full"
            />
          </div>

        </div>
      </div>
    </nav>
  );
}
