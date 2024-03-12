"use client";

import React from "react";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import CoinPage from "./[coinId]";
import Tabs from "./components/Tabs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div className={`${inter.variable} font-sans`}>
      <NavBar />
      <CoinPage coinId="bitcoin" />
      <Tabs />
    </div>
  );
}
