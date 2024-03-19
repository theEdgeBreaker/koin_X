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
