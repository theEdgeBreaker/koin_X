import React from "react";
import Image from "next/image";
import TrendingCoins from "./TrendingCoins";

function GetStartedCard() {
  return (
    <div className=" flex flex-col gap-10 md:gap-6 lg:gap-4 ">
      <div
        // className="py-8 px-12 rounded-2xl"
        className="pt-11 py-8 px-12 ml-5 mr-5 md:ml-6 
      md:mr-6 lg:ml-5 lg:mr-12 rounded-xl md:rounded-2xl"
        // width: "27%",
        style={{ backgroundColor: "#0052FE" }}
      >
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="font-bold text-3xl text-white px-8 leading-10">
              Get Started with KoinX for FREE
            </h3>
            <p className="text-lg leading-7" style={{ color: "#F2F2F2" }}>
              With our range of features that you can equip for free, koinX
              allows you to be more educated and aware of your tax reports.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 pb-6">
            <Image src="/frame.svg" alt="Frame Logo" width={190} height={24} />
            <div>
              <button
                className="bg-white text-lg px-6 py-3 font-bold rounded-lg"
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
