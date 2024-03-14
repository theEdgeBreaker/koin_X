import React from "react";
import ReactApexChart from "react-apexcharts";

import Image from "next/image";

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
      <h2>Sentiment</h2>
      <div>
        <span>Key Events</span>
        <span className=" bg-slate-600 px-2 rounded-full text-white ">i</span>
      </div>
      <div>
        <div>
          <Image />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <p>
              Egestas purus viverra accumsan in nisl. Morbi tristique senectus
              et netus. Elit at imperdiet dui accumsan sit amet.
            </p>
            <p>
              Maecenas pharetra convallis posuere morbi leo urna molestie at
              elementum. Sapien et ligula ullamcorper malesuada proin libero
              nunc. Pretium vulputate sapien nec sagittis aliquam malesuada.
              Morbi leo urna molestie at elementum eu facilisis. Condimentum
              vitae sapien pellentesque habitant morbi tristique senectus.
            </p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <p>
              Tristique sollicitudin nibh sit amet commodo nulla facilisi
              nullam. Sed risus pretium quam vulputate.
            </p>
            <p>
              Quis hendrerit dolor magna eget est lorem ipsum dolor. Ut diam
              quam nulla porttitor massa id neque aliquam vestibulum. Sagittis
              nisl rhoncus mattis rhoncus. Eu scelerisque felis imperdiet proin
              fermentum leo. Posuere ac ut consequat semper viverra nam libero
              justo. Eu volutpat odio facilisis mauris sit amet. Ultrices vitae.
            </p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <p>
              Senectus et netus et malesuada fames. Aenean et tortor at risus
              viverra adipiscing. Condimentum lacinia quis vel eros donec ac.
            </p>
            <p>
              Felis eget velit aliquet sagittis id consectetur. Urna nunc id
              cursus metus aliquam eleifend mi in. Tincidunt augue interdum
              velit euismod in pellentesque massa. Tincidunt vitae semper quis
              lectus nulla at volutpat. Sem integer vitae justo eget magna
              fermentum. Velit aliquet sagittis id consectetur.
            </p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <p>
              Facilisi etiam dignissim diam quis enim lobortis scelerisque.
              Purus in mollis nunc sed id.
            </p>
            <p>
              Mi sit amet mauris commodo quis imperdiet. Semper feugiat nibh sed
              pulvinar proin gravida hendrerit lectus. Turpis massa sed
              elementum tempus egestas sed. Aenean vel elit scelerisque mauris
              pellentesque pulvinar. Arcu cursus euismod quis viverra nibh. At
              lectus urna duis convallis. Vel risus commodo viverra maecenas.
            </p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <p>
              Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Odio
              morbi quis commodo odio aenean sed. Dictum non consectetur.
            </p>
            <p>
              Adipiscing tristique risus nec feugiat. Consequat semper viverra
              nam libero justo laoreet sit. Cras ornare arcu dui vivamus arcu
              felis bibendum ut. Risus nec feugiat in fermentum posuere urna.
              Nunc mattis enim ut tellus elementum sagittis. Sed vulputate mi
              sit amet. Nullam vehicula ipsum a arcu cursus vitae.
            </p>
          </div>
        </div>
      </div>

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
