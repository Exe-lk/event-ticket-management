import React from 'react';
import NIV from "@/components/niv";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image1 from "../../../public/assets/image1.png";
import image2 from "../../../public/assets/image2.png";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

function BuyTickets() {
  const router = useRouter();
  const handlePayment = async () => {
    router.push("/customerPayment");
  };

  return (
    <main className="container-fluid h-100">
      <NIV />

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

      <div className='flex-row h-auto w-full mt-10 flex content-center justify-center'>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-11/12">

          <div className="w-full sm:w-3/12 text-lg font-bold">
            <div className="flex justify-center items-center">
              <Image
                src={image1}
                alt="Image"
                width={400}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full sm:w-9/12">
            <div className="text-2xl font-bold mb-10 flex justify-center items-center">
              <span>AHAS YAATHRA LIVE IN COLOMBO</span>
            </div>
            <div className="text-xl font-semibold mb-5 ml-5 flex justify-center items-center">
              <div className="flex justify-around w-full text-gray-500">
                <div className="w-3/12 flex justify-center items-center">
                  <span>Category</span>
                </div>
                <div className="w-3/12 flex justify-center items-center">
                  <span>Price</span>
                </div>
                <div className="w-3/12 flex justify-center items-center text-center">
                  <span>Number Of Tickets</span>
                </div>
                <div className="w-3/12 flex justify-center items-center">
                  <span>Amount</span>
                </div>
              </div>
            </div>

            {[{
              category: 'Standard - Pre Sale',
              price: '3000.00 LKR',
              amount: '3000.00 LKR'
            }, {
              category: 'VIP - Pre Sale',
              price: '5000.00 LKR',
              amount: '5000.00 LKR'
            }, {
              category: 'VIP Bench (8 PAX)',
              price: '30000.00 LKR',
              amount: '30000.00 LKR'
            }, {
              category: 'VIP Bench (10 PAX)',
              price: '40000.00 LKR',
              amount: '40000.00 LKR'
            }].map((ticket, index) => (
              <div key={index} className="mb-5 ml-5 flex justify-center items-center">
                <div className="flex justify-around font-semibold w-full">
                  <div className="w-3/12 flex justify-start items-center">
                    <span>{ticket.category}</span>
                  </div>
                  <div className="w-3/12 flex justify-center items-center">
                    <span>{ticket.price}</span>
                  </div>
                  <div className="w-3/12 flex justify-center items-center">
                    <FaMinus style={{ backgroundColor: "#00C853", color: "#ffffff" }} />
                    <input type="text" className="w-1/4 m-2 border text-center" style={{ borderColor: "#00C853" }} placeholder='1' />
                    <IoMdAdd style={{ backgroundColor: "#00C853", color: "#ffffff" }} />
                  </div>
                  <div className="w-3/12 flex justify-center items-center">
                    <span>{ticket.amount}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mb-5 ml-5 flex justify-center items-center">
              <div className="flex justify-end w-full">
                <div className="w-3/12 font-bold flex justify-center items-center">
                  <span>1400000.00 LKR</span>
                </div>
              </div>
            </div>
            <div className="mb-5 ml-5 flex justify-center items-center">
              <div className="flex justify-end w-full">
                <div className="w-3/12 font-bold flex justify-center items-center">
                  <a
                    className="text-black hover:text-white px-3 py-1 rounded-xl text-md text-center font-bold"
                    style={{ backgroundColor: "#00C853" }}
                    onClick={handlePayment}
                  >
                    CHECKOUT
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default BuyTickets;
