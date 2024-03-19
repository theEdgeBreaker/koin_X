import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const trendingData = response.data.coins;
        const top3Coins = trendingData.slice(0, 3); // Get top 3 coins based on rank
        setTrendingCoins(top3Coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div
      className="border border-gray-200 bg-white md:rounded-md px-5 py-5 pb-7 md:py-7 
      md:ml-6 md:mr-6 lg:ml-5 lg:mr-12 shadow-md"
    >
      <h3
        className="pb-2 text-xl lg:text-3xl font-bold"
        style={{ color: "#0F1629" }}
      >
        Trending Coins (24H)
      </h3>
      {trendingCoins.map((coin) => (
        <div
          key={coin.item.id}
          className="flex items-center justify-between pt-5"
        >
          <div
            className="flex flex-row font-semibold"
            style={{ color: "#0F1629" }}
          >
            <img
              src={coin.item.thumb}
              alt={coin.item.name}
              className=" w-6 h-6 md:w-8 md:h-8 mr-2"
            />
            <span className=" text-sm lg:text-lg">{coin.item.name}</span>
            <span className=" text-sm lg:text-lg">
              ({coin.item.symbol.toUpperCase()})
            </span>
          </div>

          <div
            className={`font-medium ${
              coin.item.data.price_change_percentage_24h.usd > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            <span
              className={`px-2 py-1 rounded-sm text-xs lg:text-lg ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "text-green-700 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                <span className=" text-xs">&#9650; </span>
              ) : (
                <span className="text-xs">&#9660; </span>
              )}
              {Math.round(
                coin.item.data.price_change_percentage_24h.usd * 100
              ) / 100}
              %
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
