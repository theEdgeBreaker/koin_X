import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className=" bg-fuchsia-300">
      <h2>About Bitcoin</h2>
      <div className=" border-b-2 border-gray-300 pb-2">
        <p>What is Bitcoin?</p>
        <p>
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className=" border-b-2 border-gray-300 pb-2">
        <p>Lorem ipsum dolor sit amet</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.{" "}
        </p>
        <p>
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>

      <div className=" border-b-2 border-gray-300 pb-2">
        <h2>Already Holding Bitcoin?</h2>
        <div>
          <div>
            <Image />
            <div>
              <span>Calculate Your Profits</span>
              <button>Check Now &nbsp; &rarr;</button>
            </div>
          </div>
          <div>
            <Image />
            <div>
              <span>Calculate your tax liability</span>
              <button>Check Now &nbsp; &rarr;</button>
            </div>
          </div>
        </div>
      </div>

      <p>
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
