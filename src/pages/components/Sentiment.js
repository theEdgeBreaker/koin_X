import React from "react";
// import ReactApexChart from "react-apexcharts";
import SentimentCarousel from "./SentimentCarousel";

const Sentiment = () => {
  // ------------change made from here--------------

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }

  const ReactApexChart = require("react-apexcharts").default;

  // -------till here-----------------

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
     bg-white mt-6 px-2 md:px-7 pt-1 md:pt-7 pb-11 flex flex-col gap-4
     ml-3 mr-3 md:ml-6 md:mr-6 lg:ml-12"
    >
      <h2 className=" text-2xl md:text-3xl font-bold text-customBlue pt-2">
        Sentiment
      </h2>

      <div className="flex flex-row gap-2 items-center">
        <span className=" text-lg md:text-2xl font-semibold text-customDarkBlue">
          Key Events
        </span>
        <span className="bg-gray-500 px-1.5 md:px-2 text-xs md:text-sm rounded-full text-white">
          i
        </span>
      </div>

      <SentimentCarousel />

      <div className="flex flex-row gap-2 items-center pt-5">
        <span className=" text-xl md:text-2xl font-semibold text-customDarkBlue">
          Analyst Estimates
        </span>
        <span className="bg-gray-500 px-1.5 md:px-2 text-xs md:text-sm rounded-full text-white">
          i
        </span>
      </div>

      <div className="flex flex-row md:gap-20 lg:gap-24 items-center">
        <div
          className="text-3xl md:text-4xl bg-green-200 text-green-500 flex items-center
         px-8 h-32 md:h-36 rounded-full "
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
