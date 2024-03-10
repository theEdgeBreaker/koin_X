import React from "react";
import Image from "next/image";

function GetStartedCard() {
  return (
    <div
      className=" mr-12 py-10 px-12 rounded-2xl"
      style={{ width: "27%", backgroundColor: "#0052FE" }}
    >
      <div className="flex flex-col gap-10  items-center justify-center">
        <div className="flex flex-col gap-4 text-center">
          <h3 className="font-bold text-2xl text-white px-6 leading-10">
            Get Started with KoinX for FREE
          </h3>
          <p className="text-sm leading-6" style={{ color: "#F2F2F2" }}>
            With our range of features that you can equip for free, koinX allows{" "}
            you to be more educated and aware of your tax reports.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <Image src="/frame.svg" alt="Frame Logo" width={190} height={24} />
          <div>
            <button
              className="bg-white text-lg px-6 py-3 font-bold rounded-lg"
              style={{ color: "#0F1629" }}
            >
              Get Started for FREE &nbsp;&nbsp;&rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedCard;
