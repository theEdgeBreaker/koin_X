import React from "react";

function Performance() {
  return (
    <div
      className="border border-gray-200 rounded-md shadow-md
    bg-white mt-6 px-7 pt-7 pb-14 flex flex-col gap-9 ml-12"
    >
      <h2 className=" font-bold text-3xl" style={{ color: "#0F1629" }}>
        Performance
      </h2>

      <div className="flex flex-col gap-14">
        <div className="relative flex flex-row gap-2 items-center justify-between ">
          <div className=" flex flex-col gap-3" style={{ color: "#44475B" }}>
            <span>Today's Low</span>
            <span className="text-xl font-semibold">46,930.22</span>
          </div>
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-1.5 w-2/3 rounded-md relative">
            <div className="absolute -bottom-10 left-2/3 transform -translate-x-1/4 mb-1">
              <span className=" absolute text-sm -top-9">&#9650; </span>
              <span
                class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-lg text-black"
                style={{ color: "#44475B" }}
              >
                $48,637.83
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3" style={{ color: "#44475B" }}>
            <span>Today's High</span>
            <span className="text-xl font-semibold">49,343.83</span>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-col gap-3" style={{ color: "#44475B" }}>
            <span>52W Low</span>
            <span className="text-xl font-semibold">16,930.22</span>
          </div>
          <div
            class="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
           h-1.5 w-2/3 rounded-md"
          ></div>
          <div className="flex flex-col gap-3" style={{ color: "#44475B" }}>
            <span>52W High</span>
            <span className="text-xl font-semibold">49,743.83</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-5">
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold text-2xl" style={{ color: "#44475B" }}>
            Fundamentals
          </h3>
          <span className="bg-gray-400 w-5 text-center  rounded-full text-sm text-white">
            i
          </span>
        </div>
        <div className="flex flex-row justify-between text-lg">
          <div className="flex flex-col font-semibold">
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>Bitcoin Price</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                $16,815.46
              </span>
            </div>
            <div className="flex flex-row gap-12 justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>24h Low / 24h High</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                $16,382.07 / $16,874.12
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>7d Low / 7d High</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                $16,382.07 / $16,874.12
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>Trading Volume</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                $23,249,202,782
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>Market Cap Rank</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                #1
              </span>
            </div>
          </div>

          <div className="flex flex-col font-semibold">
            <div className="flex flex-row gap-44  justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>Market Cap</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                $323,507,290,047
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>Market Cap Dominance</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                38.343%
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400">
              <span style={{ color: "#768396" }}>Volume / Market Cap</span>
              <span className="pr-4" style={{ color: "#111827" }}>
                0.0718
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-1.5 border-gray-400 items-center">
              <span style={{ color: "#768396" }}>All-Time High</span>
              <div
                className="flex flex-col items-end pr-4"
                style={{ color: "#111827" }}
              >
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
