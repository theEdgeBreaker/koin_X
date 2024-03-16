import React from "react";
import ReactApexChart from "react-apexcharts";

const Tokenomics = () => {
  const series = [80, 20];
  const labels = ["Crowdsale investors: 80%", "Foundation: 20%"];

  const options = {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: labels,
  };

  return (
    <div
      className="bg-white mt-6 border border-gray-200 rounded-md shadow-md
    px-7 pt-7 pb-11 ml-12 tracking-wide flex flex-col gap-3"
    >
      <h2 className=" text-3xl font-bold text-customBlue">Tokenomics</h2>
      <h3 className=" text-2xl font-semibold text-charcoalGray pt-6">
        Initial Distribution
      </h3>
      <div>
        <div id="chart" style={{ width: "46%" }}>
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
      <p className=" text-lg text-greenishGray font-semibold leading-8">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
