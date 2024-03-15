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
        culpa qui officia deserunt mollit anim id est.`,
    },
    {
      image: "/SentimentLogo2.svg",
      content1:
        "Egestas purus viverra accumsan in nisl. Morbi tristique senectus et netus. Elit at imperdiet dui accumsan sit amet.",

      content2: `Maecenas pharetra convallis posuere morbi leo urna molestie at
        elementum. Sapien et ligula ullamcorper malesuada proin libero nunc.
        Pretium vulputate sapien nec sagittis aliquam malesuada. Morbi leo
        urna molestie at elementum eu facilisis. Condimentum vitae sapien
        pellentesque habitant morbi tristique.`,
    },
    {
      image: "/SentimentLogo1.svg",
      content1:
        "Egestas purus viverra accumsan in nisl. Morbi tristique senectus et netus. Elit at imperdiet dui accumsan sit amet.",

      content2: `Felis eget velit aliquet sagittis id consectetur. Urna nunc id
        cursus metus aliquam eleifend mi in. Tincidunt augue interdum velit
        euismod in pellentesque massa. Tincidunt vitae semper quis lectus
        nulla at volutpat. Sem integer vitae justo eget magna fermentum.
        Velit aliquet sagittis id consectetur.`,
    },
    {
      image: "/SentimentLogo2.svg",
      content1:
        "Egestas purus viverra accumsan in nisl. Morbi tristique senectus et netus. Elit at imperdiet dui accumsan sit amet.",

      content2: `Quis hendrerit dolor magna eget est lorem ipsum dolor. Ut diam quam
        nulla porttitor massa id neque aliquam vestibulum. Sagittis nisl
        rhoncus mattis rhoncus. Eu scelerisque felis imperdiet proin
        fermentum leo. Posuere ac ut consequat semper viverra nam libero
        justo.`,
    },
    {
      image: "/SentimentLogo1.svg",
      content1:
        "Egestas purus viverra accumsan in nisl. Morbi tristique senectus et netus. Elit at imperdiet dui accumsan sit amet.",

      content2: `Felis eget velit aliquet sagittis id consectetur. Urna nunc id
        cursus metus aliquam eleifend mi in. Tincidunt augue interdum velit
        euismod in pellentesque massa. Tincidunt vitae semper quis lectus
        nulla at volutpat. Sem integer vitae justo eget magna fermentum.
        Velit aliquet sagittis id consectetur.`,
    },
    {
      image: "/SentimentLogo2.svg",
      content1:
        "Egestas purus viverra accumsan in nisl. Morbi tristique senectus et netus. Elit at imperdiet dui accumsan sit amet.",

      content2: `Maecenas pharetra convallis posuere morbi leo urna molestie at
        elementum. Sapien et ligula ullamcorper malesuada proin libero nunc.
        Pretium vulputate sapien nec sagittis aliquam malesuada. Morbi leo
        urna molestie at elementum eu facilisis. Condimentum vitae sapien
        pellentesque habitant morbi tristique.`,
    },
  ];

  const moveLeft = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setCurrentCard((next) => (next === cards.length - 1 ? 0 : next + 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentCard * 60}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-2/3 pr-4 flex-shrink-0 ">
            <div className=" rounded-md p-6 pb-10 bg-skyBlueMist">
              <div className="flex flex-row gap-3 ">
                <Image
                  src={card.image}
                  alt="sentiment Logo"
                  width={100}
                  height={24}
                />
                <p className="text-shadowyNavy font-semibold text-lg">
                  {card.content1}
                </p>
              </div>

              <div className="text-gray-500 text-lg pl-16 pt-3">
                {card.content2}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2   
          text-slateBlueGray bg-white px-4 py-2 shadow-md rounded-full 
          z-10 text-2xl font-semibold "
        onClick={moveLeft}
      >
        {"<"}
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2
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
