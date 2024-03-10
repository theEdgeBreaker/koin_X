import React, { useEffect } from "react";

const TradingViewChart = ({ symbol }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: 844,
        height: 600,
        symbol: symbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_chart",
      });
    };
    document.body.appendChild(script);
  }, [symbol]);

  return <div id="tradingview_chart" />;
};

export default TradingViewChart;

// // =====================================

// import React, { useEffect, useRef } from "react";

// const TradingViewChart = ({ symbol }) => {
//   const chartContainer = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/tv.js";
//     script.async = true;
//     script.onload = () => {
//       const chartWidth = chartContainer.current.offsetWidth * 0.75; // 75% of parent's width
//       new window.TradingView.widget({
//         width: chartWidth,
//         height: 600,
//         symbol: symbol,
//         interval: "D",
//         timezone: "Etc/UTC",
//         theme: "light",
//         style: "1",
//         locale: "en",
//         toolbar_bg: "#f1f3f6",
//         enable_publishing: false,
//         allow_symbol_change: true,
//         container_id: "tradingview_chart",
//       });
//     };
//     document.body.appendChild(script);
//   }, [symbol]);

//   return (
//     <div
//       ref={chartContainer}
//       id="tradingview_chart"
//       style={{ width: "100%" }}
//     />
//   );
// };

// export default TradingViewChart;

// ===================================================
