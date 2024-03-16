import React, { useState, useEffect } from "react";

function YouMayLikeCarousel() {
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
          setShowLeftButton(false); // Initially hide left button
          setShowRightButton(data.coins.length > 1); // Show right button if there are more than one card
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
      setShowLeftButton(true); // Always show left button when navigating
      setShowRightButton(newIndex !== trendingCoins.length - 1); // Update visibility of right button
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? trendingCoins.length - 1 : prevIndex - 1;
      setShowRightButton(true); // Always show right button when navigating
      setShowLeftButton(newIndex !== 0); // Update visibility of left button
      return newIndex;
    });
  };

  return (
    <div className=" px-5 pt-6 pb-7 mt-24 bg-white">
      <div className="overflow-hidden mt-16 ml-8 mr-8 relative ">
        {showLeftButton && (
          <div className="absolute left-0  top-1/2  z-50">
            <button
              className="bg-white rounded-full px-3 py-2 shadow-md"
              onClick={handlePrev}
            >
              {"<"}
            </button>
          </div>
        )}
        {showRightButton && (
          <div className="absolute right-0 top-1/2 transform  z-50">
            <button
              className="bg-white rounded-full px-3 py-2 shadow-md"
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>
        )}
        <h2 className="text-3xl font-bold text-darkGraphite mb-8">
          You May Also Like
        </h2>
        <div
          className="carousel-container flex flex-row gap-4  "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {trendingCoins.map((coin, index) => (
            <div
              key={coin.item.id}
              className="coin-card  bg-white rounded-lg py-4 pl-8 pr-40 flex flex-col 
                 border border-gray-200 shadow-md gap-3 w-96 "
            >
              <div className="flex felx-row gap-2 items-center">
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  className="h-8 w-16 mx-auto"
                />

                <div className="flex flex-row">
                  <p className="font-semibold text-darkGraphite text-lg">
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
                    } rounded-sm text-sm h-7 p-1`}
                  >
                    {coin.item.data.price_change_percentage_24h.usd >= 0
                      ? "+"
                      : ""}
                    {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-darkCharcoal text-2xl font-semibold">
                  {/[a-zA-Z]/.test(coin.item.data.price)
                    ? "NAN"
                    : coin.item.data.price}
                </p>

                <img
                  src={coin.item.data.sparkline}
                  alt={coin.item.name}
                  className="h-24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YouMayLikeCarousel;
