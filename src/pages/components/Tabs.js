import React from "react";
import Link from "next/link";

function Tabs() {
  return (
    <div>
      <ul>
        <li>
          <Link>Overview</Link>
        </li>
        <li>
          <Link>Fundamentals</Link>
        </li>
        <li>
          <Link>News Insights</Link>
        </li>
        <li>
          <Link>Sentiments</Link>
        </li>
        <li>
          <Link>Team</Link>
        </li>
        <li>
          <Link>Technicals</Link>
        </li>
        <li>
          <Link>Tokenomics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
