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
    <div className="border border-gray-200 rounded-md px-5 pt-6 pb-7 shadow-md relative">
      {showLeftButton && (
        <div className="absolute top-1/3 left-0 transform -translate-y-1/2 z-50">
          <button
            className="absolute left-0 top-0 mt-6 ml-2 bg-white rounded-full px-3 py-2 shadow-md"
            onClick={handlePrev}
          >
            {"<"}
          </button>
        </div>
      )}
      {showRightButton && (
        <div className="absolute top-1/3 right-0 transform -translate-y-1/2 z-50">
          <button
            className="absolute right-0 top-0 mt-6 mr-2 bg-white rounded-full px-3 py-2 shadow-md "
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
      )}
      <div className="overflow-hidden">
        <h2>Trending Coins</h2>
        <div
          className="carousel-container flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {trendingCoins.map((coin, index) => (
            <div
              key={coin.item.id}
              className="coin-card bg-white rounded-lg p-4 flex flex-col justify-between border border-gray-200 shadow-md"
            >
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="h-16 w-16 mx-auto"
              />
              <div className="text-center">
                <p className="text-lg font-bold">{coin.item.name}</p>
                <p className="text-gray-500">{coin.item.symbol}</p>
                <p className="text-gray-700">Price: {coin.item.data.price}</p>
                <p className="text-red-500">
                  Price Change: {coin.item.data.price_change_percentage_24h.usd}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingCoinsCarousel;
