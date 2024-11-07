import React from "react";
import image2 from "../../../public/assets/events.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NIV from "@/components/niv";

function login() {
  const router = useRouter();

  const handlelogin = async () => {
    router.push("/customerHome");
  };

  return (
    <main className="relative h-screen w-screen flex flex-col md:flex-row">
      <NIV />

      <Image
        src={image2}
        alt="Login Background"
        layout="fill"
        className="object-cover opacity-50"
        priority
      />

      <div className="relative z-10 w-full md:w-1/2 h-full flex items-center justify-center ml-auto p-4 md:p-0">
        <div className="max-w-md w-full px-4 py-8 md:px-6 md:py-12 bg-white shadow-lg rounded-lg text-center">
          <span className="text-3xl md:text-4xl font-bold leading-9">WELCOME BACK</span>

          <div className="mt-8 md:mt-10 space-y-6">
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                id="email"
                type="text"
                required
                className="w-full px-3 py-2 text-black shadow-sm border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="flex flex-col items-start mt-5">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-3 py-2 text-black shadow-sm border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="w-full text-sm">
              <a className="flex font-bold italic underline">
                Forgot password
              </a>
              <div className="flex items-center space-x-2 mt-5">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="font-semibold text-sm">
                  Remember me
                </label>
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <button
                type="submit"
                className="w-3/4 md:w-1/2 rounded-md px-3 py-2 font-bold text-black"
                style={{ backgroundColor: "#00C853" }}
                onClick={handlelogin}
              >
                SIGN IN
              </button>
            </div>

            <p className="mt-5 text-sm font-semibold text-gray-600">
              Don’t have an account?
              <a href="/signup" className="ml-1 text-blue-700 font-bold hover:text-primary-content">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default login;
