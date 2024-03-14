import React from "react";
import Image from "next/image";

function SentimentCarousel() {
  return (
    <div className="bg-green-500 flex flex-row gap-5 relative">
      <button
        className=" px-5 absolute left-0 h-full
        top-0 flex items-center justify-center bg-pink-500"
      >
        &lt;
      </button>
      <button className="bg-teal-800 px-5 absolute right-0 h-full">&gt;</button>
      <div
        className="border border-gray-200 rounded-md p-5 shadow-md bg-skyBlueMist
        flex flex-row gap-2"
      >
        <Image
          src="/SentimentLogo1.svg"
          alt="sentiment Logo"
          width={55}
          height={24}
        />
        <div className="flex flex-col gap-2">
          <p className="text-shadowyNavy font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div
        className="border border-gray-200 rounded-md p-5 shadow-md bg-skyBlueMist
        flex flex-row gap-2"
      >
        <Image
          src="/SentimentLogo2.svg"
          alt="sentiment Logo"
          width={55}
          height={24}
        />
        <div className="flex flex-col gap-2">
          <p className="text-shadowyNavy font-bold">
            Egestas purus viverra accumsan in nisl. Morbi tristique senectus et
            netus. Elit at imperdiet dui accumsan sit amet.
          </p>
          <p>
            Maecenas pharetra convallis posuere morbi leo urna molestie at
            elementum. Sapien et ligula ullamcorper malesuada proin libero nunc.
            Pretium vulputate sapien nec sagittis aliquam malesuada. Morbi leo
            urna molestie at elementum eu facilisis. Condimentum vitae sapien
            pellentesque habitant morbi tristique senectus.
          </p>
        </div>
      </div>

      <div
        className="border border-gray-200 rounded-md p-5 shadow-md bg-skyBlueMist
        flex flex-row gap-2"
      >
        <Image
          src="/SentimentLogo1.svg"
          alt="sentiment Logo"
          width={55}
          height={24}
        />
        <div className="flex flex-col gap-2">
          <p className="text-shadowyNavy font-bold">
            Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
            Sed risus pretium quam vulputate.
          </p>
          <p>
            Quis hendrerit dolor magna eget est lorem ipsum dolor. Ut diam quam
            nulla porttitor massa id neque aliquam vestibulum. Sagittis nisl
            rhoncus mattis rhoncus. Eu scelerisque felis imperdiet proin
            fermentum leo. Posuere ac ut consequat semper viverra nam libero
            justo. Eu volutpat odio facilisis mauris sit amet. Ultrices vitae.
          </p>
        </div>
      </div>

      <div
        className="border border-gray-200 rounded-md p-5 shadow-md bg-skyBlueMist
        flex flex-row gap-2"
      >
        <Image
          src="/SentimentLogo2.svg"
          alt="sentiment Logo"
          width={55}
          height={24}
        />
        <div className="flex flex-col gap-2">
          <p className="text-shadowyNavy font-bold">
            Senectus et netus et malesuada fames. Aenean et tortor at risus
            viverra adipiscing. Condimentum lacinia quis vel eros donec ac.
          </p>
          <p>
            Felis eget velit aliquet sagittis id consectetur. Urna nunc id
            cursus metus aliquam eleifend mi in. Tincidunt augue interdum velit
            euismod in pellentesque massa. Tincidunt vitae semper quis lectus
            nulla at volutpat. Sem integer vitae justo eget magna fermentum.
            Velit aliquet sagittis id consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SentimentCarousel;
