import React, { useState, useEffect } from "react";

function TrendingCoinsCarousel() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        if (response.ok) {
          const data = await response.json();
          setTrendingCoins(data.coins);
          setShowLeftButton(false);
          setShowRightButton(data.coins.length > 1);
        } else {
          throw new Error("Failed to fetch trending coins");
        }
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === trendingCoins.length - 1 ? 0 : prevIndex + 1;
      setShowLeftButton(true);
      setShowRightButton(newIndex !== trendingCoins.length - 1);
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? trendingCoins.length - 1 : prevIndex - 1;
      setShowRightButton(true);
      setShowLeftButton(newIndex !== 0);
      return newIndex;
    });
  };

  return (
    <div className=" md:px-5 md:pt-6 pb-3 md:pb-24  ">
      <div className="overflow-hidden md:ml-8 md:mr-8 relative ">
        {showLeftButton && (
          <div className="absolute left-0  top-1/2  z-50">
            <button
              className="bg-white rounded-full px-2 md:px-3 py-1 md:py-2 shadow-md"
              onClick={handlePrev}
            >
              {"<"}
            </button>
          </div>
        )}
        {showRightButton && (
          <div className="absolute right-0 top-1/2 transform  z-50">
            <button
              className="bg-white rounded-full px-2 md:px-3 py-1 md:py-2 shadow-md"
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>
        )}
        <h2 className=" text-xl md:text-3xl font-bold text-darkGraphite md:mb-8">
          Trending Coins
        </h2>
        <div
          className="carousel-container flex flex-row gap-2 md:gap-4  "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {trendingCoins.map((coin, index) => (
            <div
              key={coin.item.id}
              className="coin-card  bg-white rounded-lg py-2 md:py-4 pl-2 md:pl-8 pr-10 md:pr-40 flex flex-col 
                 border border-gray-200 shadow-md gap-1 md:gap-3 w-44 h-28 md:h-52 md:w-96 "
            >
              <div className="flex felx-row gap-2 items-center">
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  className="h-6 w-6 md:h-8 md:w-16 mx-auto"
                />

                <div className="flex flex-row items-center">
                  <p className="font-semibold text-darkGraphite text-xs md:text-lg">
                    {coin.item.symbol}
                  </p>

                  <p
                    className={`text-${
                      coin.item.data.price_change_percentage_24h.usd >= 0
                        ? "green-500"
                        : "red-500"
                    } bg-${
                      coin.item.data.price_change_percentage_24h.usd <= 0
                        ? "red-100"
                        : "green-100"
                    } rounded-sm text-xs md:text-sm h-4 md:h-7  md:p-1`}
                  >
                    {coin.item.data.price_change_percentage_24h.usd >= 0
                      ? "+"
                      : ""}
                    {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-darkCharcoal text-sm md:text-2xl font-semibold">
                  {/[a-zA-Z]/.test(coin.item.data.price)
                    ? "NAN"
                    : coin.item.data.price}
                </p>

                <img
                  src={coin.item.data.sparkline}
                  alt={coin.item.name}
                  className=" h-10 md:h-24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingCoinsCarousel;
