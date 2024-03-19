import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <p className="text-gray-300 font-semibold  text-xs md:text-sm ">
        Bitcoin
      </p>
      <div
        className="bg-white rounded-sm px-4 py-3 md:px-16 md:py-4 flex justify-between
       items-center shadow-md"
        style={{
          boxShadow:
            "0 0px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div>
          <Image
            src="/koinxLogoSVG.svg"
            alt="KoinX Logo"
            width={100}
            height={24}
            className=" w-20 md:w-28"
          />
        </div>
        <div
          className="sm:flex flex-row gap-4 md:gap-9 items-center font-semibold 
        text-base sm:text-lg"
        >
          <button
            className="text-black px-3 py-2 rounded-lg text-xl sm:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? "✕" : "☰"}
          </button>

          <div
            className="hidden sm:flex flex-row gap-4 md:gap-7 text-sm md:text-lg items-center"
            style={{ color: "#0F1629" }}
          >
            <Link href="#" className=" hover:text-gray-500">
              Crypto Taxes
            </Link>
            <Link href="#" className=" hover:text-gray-500">
              Free Tools
            </Link>
            <Link href="#" className=" hover:text-gray-500">
              Resource Center
            </Link>
          </div>
          <button
            className="text-white px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-lg text-center 
             rounded-md md:rounded-md bg-blue-500
             hover:bg-blue-600 hidden sm:block"
          >
            Get Started
          </button>
        </div>
      </div>
      {showMenu && (
        <div
          className=" absolute top-0 right-0 bg-slate-900 bg-opacity-50 px-4 py-6
         sm:hidden font-semibold min-h-screen z-50"
          style={{ width: "73%" }}
        >
          <button
            className="absolute top-6 right-4 text-white px-3 py-3 text-xl"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <div className="flex flex-col gap-11 pt-24 items-center text-lg">
            <Link href="#" className="text-white hover:text-gray-200">
              Crypto Taxes
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              Free Tools
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              Resource Center
            </Link>
            <button
              className="text-white px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600"
              onClick={toggleMenu}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
