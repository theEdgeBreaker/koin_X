import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import TradingViewChart from "./TradingViewChart";
// import GetStartedCard from "./GetStartedCard";

const CoinInfo = ({ coinId }) => {
  const [coinData, setCoinData] = useState(null);
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        setCoinData(coinResponse.data);

        const priceResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=inr,usd&include_24hr_change=true`
        );
        setPriceData(priceResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoinData();
  }, [coinId]);

  return (
    <div className=" ml-5 mr-5 md:ml-6 md:mr-6 lg:ml-12 ">
      <div className="text-sm flex flex-row gap-2 pt-5 pb-14 md:py-3">
        <span className=" text-slate-400">Cryptopcurrencies</span>
        <span className=" text-slate-400"> {">>"}</span>
        {coinData && <span className="font-semibold">{coinData.name}</span>}
      </div>
      <div
        className="border border-gray-200 rounded-md px-5 pt-6 pb-7 shadow-md
        bg-white relative"
      >
        {coinData && priceData && (
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-8">
              {/* <div className="flex flex-row gap-8 items-center bg-green-300"> */}
              <div
                className="flex flex-row gap-6 items-center absolute 
              inset-x-0 bottom-full  md:relative md:bottom-auto 
              md:flex-nowrap md:gap-8 pb-4 "
              >
                <div className="flex flex-row gap-2 items-center">
                  {coinData.image && (
                    <img
                      src={coinData.image.small}
                      alt={coinData.name}
                      width={30}
                      height={30}
                    />
                  )}
                  <h1
                    className=" font-bold text-lg md:text-3xl"
                    style={{ color: "#0B1426" }}
                  >
                    {coinData.name}
                  </h1>
                  <p
                    className=" text-sm md:text-xl font-semibold "
                    style={{ color: "#5D667B" }}
                  >
                    {coinData.symbol.toUpperCase()}
                  </p>
                </div>

                <div>
                  <p
                    className=" text-white px-1 sm:px-2 py-0.5 sm:py-1.5 rounded-sm sm:rounded-md 
                    text-md sm:text-lg "
                    style={{ backgroundColor: "#808A9D" }}
                  >
                    Rank #{coinData.market_cap_rank}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row gap-6 items-center">
                    <span className="  text-3xl md:text-4xl font-bold text-deepMidnightBlue">
                      &#x24;{priceData[coinId].usd}
                    </span>
                    <span
                      className={` text-sm sm:text-lg px-2 py-0.5 rounded-sm ${
                        parseFloat(priceData[coinId].usd_24h_change) >= 0
                          ? "text-green-700 bg-green-100"
                          : "text-red-600 bg-red-100"
                      }`}
                    >
                      {parseFloat(priceData[coinId].usd_24h_change) >= 0 ? (
                        <span className=" text-xs sm:text-sm">&#9650; </span>
                      ) : (
                        <span className="text-xs sm:text-sm">&#9660; </span>
                      )}
                      {Math.abs(
                        parseFloat(priceData[coinId].usd_24h_change)
                      ).toFixed(2)}
                      %
                    </span>
                  </div>

                  <span
                    className=" text-sm sm:text-lg"
                    style={{ color: "#768396" }}
                  >
                    (24H)
                  </span>
                </div>
                <p className=" text-lg sm:text-xl font-semibold text-deepMidnightBlue">
                  &#8377; {priceData[coinId].inr}
                </p>
              </div>
            </div>

            {/* TradingViewChart Imported */}

            {/* <TradingViewChart symbol={`${coinId.toUpperCase()}USD`} /> */}
            {/* <div>
              <TradingViewChart key={Date.now()} />
            </div> */}
            {/* <TradingViewChart coinId={coinId} /> */}
            {/* <div height={590}>
              <TradingViewChart />
            </div> */}
            {/* <Image src="/frame.svg" alt="Frame Logo" width={590} height={24} /> */}
            <TradingViewChart />
          </div>
        )}
      </div>

      {/* GetStartedCard Imported */}

      {/* <div>
        <GetStartedCard />
      </div> */}
    </div>
  );
};

export default CoinInfo;

// ================================
