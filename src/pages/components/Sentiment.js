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
        barHeight: "30%",
        distributed: true,
        dataLabels: {
          position: "top",
        },
        // barWidth: "100%", // Adjust the width of the bars
      },
    },

    xaxis: {
      categories: ["buy", "hold", "sell"],
      labels: {
        show: false,
      },
    },
    style: {
      fontSize: "60px",
    },
    colors: ["#28a745", "#C7C8CE", "#dc3545"],
  };

  return (
    <div
      className="border border-gray-200 rounded-md shadow-md
     bg-white mt-6 px-7 pt-7 pb-11 ml-12 flex flex-col gap-4"
    >
      <h2 className="text-3xl font-bold text-customBlue pt-2">Sentiment</h2>

      <div className="flex flex-row gap-2 items-center">
        <span className="text-2xl font-semibold text-customDarkBlue">
          Key Events
        </span>
        <span className="bg-gray-500 px-2 text-sm rounded-full text-white">
          i
        </span>
      </div>

      <SentimentCarousel />

      <div className="flex flex-row gap-2 items-center pt-5">
        <span className="text-2xl font-semibold text-customDarkBlue">
          Analyst Estimates
        </span>
        <span className="bg-gray-500 px-2 text-sm rounded-full text-white">
          i
        </span>
      </div>

      <div className="flex flex-row gap-24 items-center">
        <div
          className=" text-4xl bg-green-200 text-green-500 flex items-center
         px-8 h-36 rounded-full "
        >
          76%
        </div>
        <div style={{ width: "60%" }}>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={170}
          />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
