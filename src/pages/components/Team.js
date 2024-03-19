import React from "react";
import Image from "next/image";
import YouMayLikeCarousel from "./YouMayLikeCarousel";
import TrendingCoinsCarousel from "./TrendingCoinsCarousel";

function Team() {
  return (
    <div
      className="bg-white border border-gray-200 rounded-md shadow-md
      pl-2  md:pl-7 pr-2 md:pr-9 pt-7 mb-10 md:mb-0 md:pb-16 tracking-wide mt-6 
      ml-3 mr-3 md:ml-6 md:mr-6 lg:ml-12"
    >
      <h2 className=" text-2xl md:text-4xl font-bold">Team</h2>
      <p className=" text-sm md:text-lg text-greenishGray pt-7">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-6 pt-6">
        <div
          className=" bg-skyBlueMist flex flex-col md:flex-row gap-4 md:gap-9 
           py-3 md:py-3.5 px-3 md:px-8 rounded-lg items-center"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/TeamImg1.svg"
              alt="Team People Image"
              width={130}
              height={30}
            />
            <span className=" font-bold pt-3 tracking-wide">John Smith</span>
            <span className="text-sm pt-1 text-slateBlueGray font-semibold tracking-wide">
              Designation Here
            </span>
          </div>
          <p className=" text-customBlue text-sm md:text-lg leading-6 md:leading-none md:w-5/6">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>

        <div
          className=" bg-skyBlueMist flex flex-col md:flex-row gap-4 md:gap-9 
          py-3 md:py-3.5 px-3 md:px-8 rounded-lg items-center"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/TeamImg2.svg"
              alt="Team People Image"
              width={130}
              height={30}
            />
            <span className=" font-bold pt-3 tracking-wide">
              Elina Williams
            </span>
            <span className="text-sm pt-1 text-slateBlueGray font-semibold tracking-wide">
              Designation Here
            </span>
          </div>
          <p
            className=" text-customBlue text-sm md:text-lg leading-6 
             md:leading-none md:w-5/6"
          >
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>

        <div
          className=" bg-skyBlueMist flex flex-col md:flex-row gap-4 
          md:gap-9 py-3 md:py-3.5 px-3 md:px-8 rounded-lg items-center"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/TeamImg3.svg"
              alt="Team People Image"
              width={130}
              height={30}
            />
            <span className=" font-bold pt-3 tracking-wide">John Doe</span>
            <span className="text-sm pt-1 text-slateBlueGray font-semibold tracking-wide">
              Designation Here
            </span>
          </div>
          <p className=" text-customBlue text-sm md:text-lg leading-6 md:leading-none md:w-5/6">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
        <div className=" block sm:hidden">
          <YouMayLikeCarousel />
          <TrendingCoinsCarousel />
        </div>
      </div>
    </div>
  );
}

export default Team;
