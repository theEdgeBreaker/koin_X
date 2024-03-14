import React from "react";
import ReactApexChart from "react-apexcharts";
import SentimentCarousel from "./SentimentCarousel";

const Sentiment = () => {
  const series = [
    {
      data: [76, 8, 16],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ["buy", "hold", "sell"],
      labels: {
        show: false,
      },
    },
    style: {
      fontSize: "60px", // Adjust the font size as needed
    },
    colors: ["#28a745", "#6c757d", "#dc3545"], // Green, Grey, Red
  };

  return (
    <div
      className="border border-gray-200 rounded-md shadow-md
  bg-pink-300"
    >
      <h2 className="text-3xl font-bold text-customBlue">Sentiment</h2>

      <div className="flex flex-row gap-2 items-center">
        <span className="text-2xl font-semibold text-customDarkBlue">
          Key Events
        </span>
        <span className=" bg-gray-500 px-2 text-sm rounded-full text-white ">
          i
        </span>
      </div>

      <SentimentCarousel />

      <div>
        <span>Analyst Estimates</span>
        <span className=" bg-slate-600 px-2 rounded-full text-white ">i</span>
      </div>
      <div>
        <div className=" w-32 bg-green-300 text-green-500 px-7 py-10 rounded-full text-4xl text-center">
          76%
        </div>
        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;

// -----------------------------------------
