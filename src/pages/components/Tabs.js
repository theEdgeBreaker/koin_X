import React from "react";
import Link from "next/link";

function Tabs() {
  return (
    <div
      className="flex flex-row gap-12 border-b-2 border-gray-300 pb-2
    ml-12 font-semibold text-lg pt-14"
      style={{ color: "#3E424A" }}
    >
      <div>
        <Link href="#overview" smooth={true} duration={500}>
          Overview
        </Link>
      </div>
      <div>
        <Link href="#overview" smooth={true} duration={500}>
          Fundamentals
        </Link>
      </div>
      <div>
        <Link href="#news-insights" smooth={true} duration={500}>
          News Insights
        </Link>
      </div>
      <div>
        <Link href="#sentiments" smooth={true} duration={500}>
          Sentiments
        </Link>
      </div>
      <div>
        <Link href="#team" smooth={true} duration={500}>
          Team
        </Link>
      </div>
      <div>
        <Link href="#" smooth={true} duration={500}>
          Technicals
        </Link>
      </div>
      <div>
        <Link href="#tokenomics" smooth={true} duration={500}>
          Tokenomics
        </Link>
      </div>
    </div>
  );
}

export default Tabs;

// ============================
