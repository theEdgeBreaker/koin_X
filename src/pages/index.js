"use client";

import React from "react";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import CoinPage from "./[coinId]";
import Tabs from "./components/Tabs";
import About from "./components/About";
import Team from "./components/Team";
import Performance from "./components/Performance";
import dynamic from "next/dynamic";
import YouMayLikeCarousel from "./components/YouMayLikeCarousel";
import TrendingCoinsCarousel from "./components/TrendingCoinsCarousel";
import GetStartedCard from "./components/GetStartedCard";

const Sentiment = dynamic(() => import("./components/Sentiment"), {
  ssr: false,
});

const Tokenomics = dynamic(() => import("./components/Tokenomics"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div
      className={`${inter.variable} font-sans bg-gray-100 relative  `}
      style={{ width: "100%" }}
    >
      <NavBar />

      <CoinPage coinId="bitcoin" />

      <div className="w-full lg:w-4/6 ">
        <Tabs />
      </div>

      <div className="w-full lg:w-4/6 " id="overview">
        <Performance />
      </div>

      <div className="w-full lg:w-4/6" id="sentiments">
        <Sentiment />
      </div>

      <div className="w-full lg:w-4/6" id="news-insights">
        <About />
      </div>

      <div className="w-full lg:w-4/6" id="tokenomics">
        <Tokenomics />
      </div>

      <div className="w-full lg:w-4/6" id="team">
        <Team />
      </div>

      <div className="hidden sm:block">
        <YouMayLikeCarousel />
      </div>

      <div className="hidden sm:block">
        <TrendingCoinsCarousel />
      </div>

      <div className="w-full lg:w-2/6 absolute lg:top-36 lg:right-0">
        <GetStartedCard />
      </div>
    </div>
  );
}
