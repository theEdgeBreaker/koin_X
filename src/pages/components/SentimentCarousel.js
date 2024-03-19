import React, { useState } from "react";
import Image from "next/image";

const SentimentCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      image: "/SentimentLogo1.svg",
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa.`,
    },
    {
      image: "/SentimentLogo2.svg",
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
    },
    {
      image: "/SentimentLogo1.svg",
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
    },
    {
      image: "/SentimentLogo2.svg",
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
    },
    {
      image: "/SentimentLogo1.svg",
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
    },
    {
      image: "/SentimentLogo2.svg",
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
    },
  ];

  const moveLeft = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setCurrentCard((next) => (next === cards.length - 1 ? 0 : next + 1));
  };

  return (
    <div className="relative overflow-x-auto md:overflow-hidden ">
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      `}</style>
      <div
        className="flex transition-transform duration-300 "
        style={{
          transform: `translateX(-${currentCard * 60}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className=" w-11/12 md:w-5/6 lg:w-2/3 pr-4 flex-shrink-0 "
          >
            <div className=" rounded-md p-2 md:p-6 pb-5 md:pb-10 bg-skyBlueMist">
              <div className="flex flex-row gap-3 ">
                <Image
                  src={card.image}
                  alt="sentiment Logo"
                  width={80}
                  height={24}
                  className="w-8"
                />
                <p className="text-shadowyNavy font-semibold text-xs md:text-lg">
                  {card.content1}
                </p>
              </div>

              <div className="text-gray-500 text-xs md:text-lg pl-11 md:pl-16 pt-3">
                {card.content2}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className=" hidden md:block lg:block absolute left-2 top-1/2 transform -translate-y-1/2   
          text-slateBlueGray bg-white px-4 py-2 shadow-md rounded-full 
          z-10 text-2xl font-semibold "
        onClick={moveLeft}
      >
        {"<"}
      </button>
      <button
        className=" hidden md:block lg:block absolute right-2 top-1/2 transform -translate-y-1/2
        text-slateBlueGray bg-white px-4 py-2 shadow-md rounded-full 
        z-10 text-2xl font-semibold"
        onClick={moveRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default SentimentCarousel;
