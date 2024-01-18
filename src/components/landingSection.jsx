import React from "react";
import img from "../assets/images/landing.svg";
import Searchbar from "./searchbar";

function LandingSection() {
  return (
    <div className="relative flex justify-center">
      <img src={img} alt="Landing img" className="h-auto w-full max-w-full" />
      <div className="text-white absolute top-40 max-md:top-32 w-2/3 text-center">
        <h1 className="font-bold text-[70px] max-md:text-[46px] max-sm:text-[22px]">
          Discover over 2,000,000 free Stock Images.
        </h1>
        <div className="w-4/5 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-[310px] max-md:top-64 max-sm:top-36">
        <Searchbar />
        </div>
        <div className="absolute top-[360px] max-md:top-[300px] max-sm:top-[136px] left-1/2 -translate-x-1/2 text-[13px] max-md:[10px] inline-block px-6 max-md:px-3 max-sm:px-0 py-1 max-sm:py-0 border-2 border-[rgb(182,182,182,0.5)] backdrop-blur-lg bg-[rgb(182,182,182,0.2)] shadow-inset rounded-lg">
          <div className="line-clamp-1">
            <span className="font-semibold">Trending:</span> flowers, love,
            forest, river
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
