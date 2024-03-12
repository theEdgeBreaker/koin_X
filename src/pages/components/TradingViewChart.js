// import React, { useEffect } from "react";

// const TradingViewChart = ({ symbol }) => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/tv.js";
//     script.async = true;
//     script.onload = () => {
//       new window.TradingView.widget({
//         width: "200%",
//         height: "100%",
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

//   return <div id="tradingview_chart" />;
// };

// export default TradingViewChart;

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

// import React, { useEffect, useRef, memo } from "react";

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "symbol": "BITSTAMP:BTCUSD",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "light",
//         "style": "3",
//         "locale": "en",
//         "enable_publishing": false,
//         "hide_legend": true,
//         "allow_symbol_change": true,
//         "save_image": false,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }`;
//     container.current.appendChild(script);

//     return () => {
//       // Cleanup function to remove the script element
//       container.current.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       className="tradingview-widget-container"
//       ref={container}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <div
//         className="tradingview-widget-container__widget"
//         // style={{ height: "calc(100% - 32px)", width: "100%" }}
//         style={{ height: "100%", width: "100%" }}
//       ></div>
//       {/* <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div> */}
//     </div>
//   );
// }

// export default memo(TradingViewWidget);

// ===========================================
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const initTradingViewWidget = async () => {
      try {
        const script = document.createElement("script");
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "height": 580,
            "autosize": true,
            "symbol": "BITSTAMP:BTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "3",
            "locale": "en",
            "enable_publishing": false,
            "hide_legend": true,
            "allow_symbol_change": true,
            "save_image": false,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
          }`;
        container.current.appendChild(script);
      } catch (error) {
        console.error("Error initializing TradingView widget:", error);
      }
    };

    initTradingViewWidget();

    return () => {
      // Clean up function
      // Remove the TradingView widget script when the component unmounts
      container.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        ref={container}
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);

// ------------------------------------------

// import React, { useEffect, useRef, memo } from "react";

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(() => {
//     const height = window.innerHeight > 768 ? 610 : 450; // Adjust as needed
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "height": ${height},
//         "autosize": true,
//         "symbol": "BITSTAMP:BTCUSD",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "light",
//         "locale": "en",
//         "enable_publishing": false,
//         "hide_legend": true,
//         "allow_symbol_change": true,
//         "save_image": false,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }`;
//     container.current.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="tradingview-widget-container"
//       ref={container}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <div
//         className="tradingview-widget-container__widget"
//         style={{ height: "calc(100% - 32px)", width: "100%" }}
//       ></div>
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
