import React from "react";
import image2 from "../../../public/assets/events.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NIV from "@/components/niv";

function Signup() {
  const router = useRouter();

  const handleSignup = async () => {
    router.push("/customerHome");
  };

  return (
    <main className="relative h-screen w-screen flex flex-col md:flex-row">
      <NIV />

      <Image
        src={image2}
        alt="Signup Background"
        layout="fill"
        className="object-cover opacity-50"
        priority
      />

      <div className="relative z-10 w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-0 ml-auto">
        <div className="max-w-md w-full px-4 py-8 md:px-6 md:py-12 bg-white shadow-lg rounded-lg">
          <span className="text-3xl md:text-4xl font-bold leading-9 text-center block">WELCOME</span>

          <div className="mt-8 md:mt-10 space-y-4">
            {[
              { label: "First Name", id: "firstName" },
              { label: "Last Name", id: "lastName" },
              { label: "Phone", id: "phone" },
              { label: "Email", id: "email" },
              { label: "Password", id: "password", type: "password" },
              { label: "Confirm Password", id: "confirmPassword", type: "password" },
              { label: "Registering As", id: "registeringAs" },
            ].map(({ label, id, type = "text" }) => (
              <div className="flex items-center" key={id}>
                <label htmlFor={id} className="text-md font-semibold w-1/3 text-left">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  required
                  className="w-2/3 px-3 py-2 text-black shadow-sm border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 rounded-md"
                />
              </div>
            ))}

            <div className="pt-5 flex justify-center">
              <button
                type="submit"
                className="w-1/2 rounded-md px-3 py-2 font-bold text-black shadow-sm"
                style={{ backgroundColor: "#00C853" }}
                onClick={handleSignup}
              >
                REGISTER
              </button>
            </div>

            <p className="mt-5 text-sm font-semibold text-zinc-600 text-center">
              Already a member?
              <a
                href="/login"
                className="ml-1 text-blue-700 font-bold hover:text-primary-content"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
