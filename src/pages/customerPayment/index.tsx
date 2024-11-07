import React from 'react';
import NIV from "@/components/niv";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image3 from "../../../public/assets/visa-logo.png";
import image4 from "../../../public/assets/mc-logo.png";
import image5 from "../../../public/assets/up-logo.png";

function CustomerPayment() {
  const router = useRouter();
  const handlePayment = async () => {
    router.push("/buyTickets");
  };

  return (
    <main className="container-fluid h-full">
      <NIV />

      <div className='flex flex-col py-4 mt-10 justify-center items-center bg-black'>
        <div className="w-full max-w-xl pt-10 px-5">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <input
              type="text"
              className="w-full md:w-9/12 border p-3 rounded-s-3xl"
              placeholder="Search for events, artists, ..."
            />
            <button
              className="w-full md:w-3/12 text-black py-3 rounded-sm font-semibold mt-4 md:mt-0"
              style={{ backgroundColor: "#00C853" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row h-full w-full mt-10 justify-center items-center'>
        <div className="flex flex-col md:flex-row justify-between w-11/12 md:w-10/12">

          {/* Billing Details Section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-6 text-center md:text-left">
              <span>Billing Details</span>
            </div>
            <div className="space-y-3">
              <input
                id="firstname"
                type="text"
                required
                className="w-2/3 px-3 py-3 text-black border-2 rounded-lg"
                placeholder='First Name'
              />
              <input
                id="lastname"
                type="text"
                required
                className="w-2/3 px-3 py-3 text-black border-2 rounded-lg"
                placeholder='Last Name'
              />
              <input
                id="phone"
                type="text"
                required
                className="w-2/3 px-3 py-3 text-black border-2 rounded-lg"
                placeholder='Phone'
              />
              <input
                id="email"
                type="email"
                required
                className="w-2/3 px-3 py-3 text-black border-2 rounded-lg"
                placeholder='Email'
              />
            </div>
          </div>

          {/* Booking Summary Section */}
          <div className="w-full md:w-1/2">
            <div className="text-2xl font-bold mb-6 text-center md:text-left">
              <span>Booking Summary</span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold w-8/12">1 x Standard - Pre Sale Ticket(s)</span>
                <span className="font-semibold w-4/12 text-center">3000.00 LKR</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold w-8/12">Sub Total</span>
                <span className="font-semibold w-4/12 text-center">3000.00 LKR</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-bold w-8/12">Total</span>
                <span className="font-bold w-4/12 text-center">3000.00 LKR</span>
              </div>
            </div>
            <div className="mb-5 flex justify-start">
              <div className="flex space-x-4">
                <Image
                  src={image3}
                  alt="visa logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <Image
                  src={image4}
                  alt="mc logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <Image
                  src={image5}
                  alt="up logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" />
                <span className="text-sm">
                  I accept and agree to
                  <a
                    className="ml-1 text-blue-700 font-bold underline hover:text-primary-content"
                  >
                    Terms and Conditions
                  </a>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="text-black hover:text-white px-6 py-2 rounded-xl text-md font-bold w-full md:w-auto"
                style={{ backgroundColor: "#00C853" }}
                onClick={handlePayment}
              >
                Back
              </button>
              <button
                className="text-black hover:text-white px-6 py-2 rounded-xl text-md font-bold w-full md:w-auto"
                style={{ backgroundColor: "#00C853" }}
              >
                Proceed To Pay
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default CustomerPayment;
