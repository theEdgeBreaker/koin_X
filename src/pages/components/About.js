import React from "react";
import Image from "next/image";

function About() {
  return (
    <div
      className=" border border-gray-200 rounded-md shadow-md
       bg-white mt-6 px-7 pt-7 pb-11 ml-12 tracking-wide"
    >
      <h2 className=" text-3xl font-bold tracking-wide">About Bitcoin</h2>
      <div className=" border-b-2 border-gray-300 pb-4">
        <p className="font-bold text-xl pt-6 tracking-wide">What is Bitcoin?</p>
        <p className=" text-lg text-greenishGray font-semibold pt-3 leading-8">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className=" border-b-2 border-gray-300 pb-4">
        <p className="font-bold text-xl pt-4">Lorem ipsum dolor sit amet</p>
        <p className=" text-lg text-greenishGray font-semibold pt-4 leading-8">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.{" "}
        </p>
        <p className=" text-lg text-greenishGray font-semibold pt-8 leading-8">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p className=" text-lg text-greenishGray font-semibold pt-8 leading-8">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>

      <div className=" border-b-2 border-gray-300 pb-4 pt-7">
        <h2 className="font-bold text-3xl">Already Holding Bitcoin?</h2>
        <div className="flex flex-row gap-10 pt-5">
          <div className="flex flex-row gap-8 bg-blue-400 rounded-lg p-4 w-1/2 ">
            <Image
              src="/holdingBitcoin1.svg"
              alt="AboutLogo"
              width={170}
              height={24}
            />
            <div
              className="flex flex-col gap-6 items-start justify-center
              leading-9 tracking-wide"
            >
              <p className=" text-2xl font-bold text-white w-40">
                Calculate Your Profits
              </p>
              <button
                className="bg-white text-lg font-semibold px-6 py-2 rounded-md
               flex flex-row items-center tracking-wide"
              >
                Check Now &nbsp; <span className="text-3xl">&#x1F852;</span>
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-8 bg-orange-400 rounded-lg p-4 w-1/2 ">
            <Image
              src="/holdingBitcoin2.svg"
              alt="AboutLogo"
              width={170}
              height={24}
            />
            <div className="flex flex-col gap-6 items-start justify-center">
              <p
                className=" text-2xl font-bold text-white w-56 
                 leading-9 tracking-wide"
              >
                Calculate your tax liability
              </p>
              <button
                className="bg-white text-lg font-semibold px-6 py-2 rounded-md
               flex flex-row items-center tracking-wide"
              >
                Check Now &nbsp; <span className="text-3xl">&#x1F852;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className=" text-lg text-greenishGray font-semibold pt-4 leading-8">
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
