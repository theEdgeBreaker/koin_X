import React from "react";
import Image from "next/image";
import TrendingCoins from "./TrendingCoins";

function GetStartedCard() {
  return (
    <div className=" flex flex-col gap-6 md:gap-6 lg:gap-4 ">
      <div
        className=" pt-4 md:pt-11 py-1 md:py-8 px-3 md:px-12 ml-3 mr-3 md:ml-6 
        md:mr-6 lg:ml-5 lg:mr-12 rounded-xl md:rounded-2xl"
        style={{ backgroundColor: "#0052FE" }}
      >
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="font-bold text-xl md:text-3xl text-white  md:px-8 leading-8 md:leading-10">
              Get Started with KoinX for FREE
            </h3>
            <p
              className=" text-sm md:text-lg leading-5 md:leading-7"
              style={{ color: "#F2F2F2" }}
            >
              With our range of features that you can equip for free, koinX
              allows you to be more educated and aware of your tax reports.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 pb-6">
            <Image
              src="/frame.svg"
              alt="Frame Logo"
              width={190}
              height={24}
              className="w-40 md:w-44"
            />
            <div>
              <button
                className="bg-white text-sm md:text-lg px-6 py-3 font-bold rounded-lg"
                style={{ color: "#0F1629" }}
              >
                Get Started for FREE &nbsp;&nbsp;&rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TrendigCoins Component imported */}

      <TrendingCoins />
    </div>
  );
}

export default GetStartedCard;
