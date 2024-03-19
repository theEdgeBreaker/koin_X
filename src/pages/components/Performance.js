import React from "react";

function Performance() {
  return (
    <div
      className="border border-gray-200 rounded-md shadow-md
    bg-white mt-6 px-2 md:px-7 pt-3 md:pt-7 pb-10 md:pb-14 flex flex-col gap-8 md:gap-9 
    ml-3 mr-3 md:ml-6 md:mr-6 lg:ml-12"
    >
      <h2 className=" font-bold text-2xl md:text-3xl text-customBlue">
        Performance
      </h2>

      <div className="flex flex-col gap-14">
        <div className="relative flex flex-row gap-2 items-center justify-between ">
          <div className=" flex flex-col gap-1 md:gap-3 text-customDarkBlue">
            <span className="text-sm">Today's Low</span>
            <span className=" text-lg md:text-xl font-semibold">46,930.22</span>
          </div>
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-1.5 w-2/3 rounded-md relative">
            <div className="absolute -bottom-10 left-2/3 transform -translate-x-1/4 mb-1">
              <span className=" absolute text-xs md:text-sm -top-9">
                &#9650;{" "}
              </span>
              <span class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-sm md:text-lg text-customDarkBlue">
                $48,637.83
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-3 text-customDarkBlue">
            <span className="text-sm">Today's High</span>
            <span className="text-lg md:text-xl font-semibold">49,343.83</span>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-col gap-1 md:gap-3 text-customDarkBlue">
            <span className="text-sm">52W Low</span>
            <span className="text-lg md:text-xl font-semibold">16,930.22</span>
          </div>
          <div
            class="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
              h-1.5 w-2/3 rounded-md"
          ></div>
          <div className="flex flex-col gap-1 md:gap-3 text-customDarkBlue">
            <span className="text-sm">52W High</span>
            <span className="text-lg md:text-xl font-semibold">49,743.83</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-5">
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold text-xl md:text-2xl text-customDarkBlue">
            Fundamentals
          </h3>
          <span className="bg-gray-400 w-4 md:w-5 text-center  rounded-full text-xs md:text-sm text-white">
            i
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm md:text-lg flex-wrap lg:flex-nowrap">
          <div className="flex flex-col font-semibold">
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span>Bitcoin Price</span>
              <span className="pr-4 text-eerieBlack">$16,815.46</span>
            </div>
            <div className="flex flex-row gap-20 md:gap-12 justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span>24h Low / 24h High</span>
              <span className="pr-4 text-eerieBlack">
                $16,382.07 / $16,874.12
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span>7d Low / 7d High</span>
              <span className="pr-4 text-eerieBlack">
                $16,382.07 / $16,874.12
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span>Trading Volume</span>
              <span className="pr-4 text-eerieBlack">$23,249,202,782</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span>Market Cap Rank</span>
              <span className="pr-4 text-eerieBlack">#1</span>
            </div>
          </div>

          <div className="flex flex-col font-semibold">
            <div className="flex flex-row gap-40 md:gap-44  justify-between  border-b-2 py-4 border-gray-400 text-slateGray">
              <span>Market&nbsp;Cap</span>
              <span className="pr-4 text-eerieBlack">$323,507,290,047</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span>Market Cap Dominance</span>
              <span className="pr-4 text-eerieBlack">38.343%</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span>Volume / Market Cap</span>
              <span className="pr-4 text-eerieBlack">0.0718</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-1.5 border-gray-400 items-center text-slateGray">
              <span>All-Time High</span>
              <div className="flex flex-col items-end pr-4 text-eerieBlack">
                <span>
                  $69,044.77 <span className="text-red-500">-75.6%</span>
                </span>
                <span className="text-sm">Nov 10, 2021 (about 1 year)</span>
              </div>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-1.5 border-gray-400 items-center">
              <span style={{ color: "#768396" }}>All-Time Low</span>
              <div
                className="flex flex-col items-end pr-4"
                style={{ color: "#111827" }}
              >
                <span>
                  $67.81 <span className="text-green-500">24729.1%</span>
                </span>
                <span className="text-sm">Jul 06, 2013 (over 9 years)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
