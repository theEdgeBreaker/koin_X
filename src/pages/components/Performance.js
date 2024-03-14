import React from "react";

function Performance() {
  return (
    <div
      className="border border-gray-200 rounded-md shadow-md
    bg-yellow-300"
    >
      <div>
        <h2>Performance</h2>

        <div>
          <div>
            <span>Today's Low</span>
            <span>46,930.22</span>
          </div>
          <div>Linear Gradient</div>
          <div>
            <span>Today's High</span>
            <span>49,343.83</span>
          </div>
        </div>
        <div>
          <div>
            <span>52W Low</span>
            <span>16,930.22</span>
          </div>
          <div>Linear Gradient</div>
          <div>
            <span>52W High</span>
            <span>49,743.83</span>
          </div>
        </div>
      </div>

      <div>
        <h3>Fundamentals</h3>
        <div>
          <div>
            <div>
              <span>Bitcoin Price</span>
              <span>$16,815.46</span>
            </div>
            <div>
              <span>24h Low / 24h High</span>
              <span>$16,382.07 / $16,874.12</span>
            </div>
            <div>
              <span>7d Low / 7d High</span>
              <span>$16,382.07 / $16,874.12</span>
            </div>
            <div>
              <span>Trading Volume</span>
              <span>$23,249,202,782</span>
            </div>
            <div>
              <span>Trading Volume</span>
              <span>#1</span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>Market Cap</span>
                <span>$323,507,290,047</span>
              </div>
              <div>
                <span>Market Cap Dominance</span>
                <span>38.343%</span>
              </div>
              <div>
                <span>Volume / Market Cap</span>
                <span>0.0718</span>
              </div>
              <div>
                <span>All-Time High</span>
                <div>
                  <span>$69,044.77 -75.6%</span>
                  <span>Nov 10, 2021 (about 1 year)</span>
                </div>
              </div>
              <div>
                <span>All-Time Low</span>
                <div>
                  <span>$67.81 24729.1%</span>
                  <span>Jul 06, 2013 (over 9 years)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
