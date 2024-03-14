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
import YouMayKnowCarousel from "./components/YouMayKnowCarousel";
import TrendingCoinsCarousel from "./components/TrendingCoinsCarousel";

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
    <div className={`${inter.variable} font-sans`}>
      <NavBar />

      <CoinPage coinId="bitcoin" />

      <div className="md:w-4/6">
        <Tabs />
      </div>

      <div className="md:w-4/6" id="overview">
        <Performance />
      </div>

      <div className="md:w-4/6" id="sentiments">
        <Sentiment />
      </div>

      <div className="md:w-4/6" id="news-insights">
        <About />
      </div>

      <div className="md:w-4/6" id="tokenomics">
        <Tokenomics />
      </div>

      <div className="md:w-4/6" id="team">
        <Team />
      </div>

      <div>
        <YouMayKnowCarousel />
      </div>

      <div>
        <TrendingCoinsCarousel />
      </div>
    </div>
  );
}
