import React, { useState } from "react";
import Link from "next/link";

function Tabs() {
  const [active, setActive] = useState("#overview");

  const handleSetActive = (href) => {
    setActive(href);
  };

  return (
    <div
      className="flex flex-row gap-12 border-b-2 border-gray-300 ml-12 font-semibold text-lg pt-14"
      style={{ color: "#3E424A" }}
    >
      <div>
        <Link href="#overview" smooth={true} duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#overview"
                ? "border-b-4 text-blue-600 pb-2  border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#overview")}
          >
            Overview
          </div>
        </Link>
      </div>
      <div>
        <Link href="#fundamentals" smooth={true} duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#fundamentals"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#fundamentals")}
          >
            Fundamentals
          </div>
        </Link>
      </div>
      <div>
        <Link href="#news-insights" smooth={true} duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#news-insights"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#news-insights")}
          >
            News Insights
          </div>
        </Link>
      </div>
      <div>
        <Link href="#sentiments" smooth={true} duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#sentiments"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#sentiments")}
          >
            Sentiments
          </div>
        </Link>
      </div>
      <div>
        <Link href="#team" smooth={true} duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#team"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#team")}
          >
            Team
          </div>
        </Link>
      </div>
      <div>
        <Link href="#" smooth={true} duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#")}
          >
            Technicals
          </div>
        </Link>
      </div>
      <div>
        <Link href="#tokenomics" smooth={true} duration={500}>
          <div
            className={`cursor-pointer ${
              active === "#tokenomics"
                ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleSetActive("#tokenomics")}
          >
            Tokenomics
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
