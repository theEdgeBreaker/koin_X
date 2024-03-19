import React from "react";
import Image from "next/image";

function About() {
  return (
    <div
      className=" border border-gray-200 rounded-md shadow-md
       bg-white mt-6 px-2 md:px-7 pt-3 md:pt-7  pb-11 tracking-wide
       ml-3 mr-3 md:ml-6 md:mr-6 lg:ml-12"
    >
      <h2 className=" text-xl md:text-3xl font-bold tracking-wide">
        About Bitcoin
      </h2>
      <div className=" border-b-2 border-gray-300 pb-4">
        <p className="font-bold text-lg md:text-xl pt-6 tracking-wide">
          What is Bitcoin?
        </p>
        <p className=" text-sm md:text-lg text-greenishGray font-semibold pt-3 leading-8">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className=" border-b-2 border-gray-300 pb-4">
        <p className="font-bold text-lg md:text-xl pt-4">
          Lorem ipsum dolor sit amet
        </p>
        <p className=" text-sm md:text-lg text-greenishGray font-semibold pt-4 leading-8">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.{" "}
        </p>
        <p className=" text-sm md:text-lg text-greenishGray font-semibold pt-8 leading-8">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p className=" text-sm md:text-lg text-greenishGray font-semibold pt-8 leading-8">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>

      <div className=" border-b-2 border-gray-300 pb-4 pt-7">
        <h2 className="font-bold text-xl md:text-3xl">
          Already Holding Bitcoin?
        </h2>
        <div className="flex flex-row gap-10 pt-5 flex-wrap md:flex-nowrap ">
          <div className="flex flex-row gap-8 bg-blue-400 rounded-lg p-4 w-full md:w-1/2 ">
            <Image
              src="/holdingBitcoin1.svg"
              alt="AboutLogo"
              width={170}
              height={24}
            />
            <div
              className="flex flex-col gap-6 items-start justify-center
              leading-7 md:leading-9"
            >
              <p className=" text-lg md:text-2xl font-bold text-white w-44 md:w-40">
                Calculate Your Profits
              </p>
              <button
                className="bg-white text-sm md:text-lg font-semibold px-3 
                md:px-6 py-1 md:py-2 rounded-md
                flex flex-row items-center md:tracking-wide"
              >
                Check Now &nbsp;{" "}
                <span className=" text-xl md:text-3xl">&#x1F852;</span>
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-8 bg-orange-400 rounded-lg p-4 w-full md:w-1/2 ">
            <Image
              src="/holdingBitcoin2.svg"
              alt="AboutLogo"
              width={170}
              height={24}
            />
            <div className="flex flex-col gap-6 items-start justify-center">
              <p
                className=" text-lg md:text-2xl font-bold text-white w-30 md:w-56 
                 leading-7 md:leading-9"
              >
                Calculate your tax liability
              </p>
              <button
                className="bg-white text-sm md:text-lg font-semibold px-3 
                md:px-6 py-1 md:py-2 rounded-md
               flex flex-row items-center md:tracking-wide  "
              >
                Check Now &nbsp;{" "}
                <span className="text-xl md:text-3xl">&#x1F852;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className=" text-sm md:text-lg text-greenishGray font-semibold pt-4 leading-8">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}

export default About;
