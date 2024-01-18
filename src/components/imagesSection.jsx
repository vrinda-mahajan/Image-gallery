import React from "react";
import img from "../assets/images/landing.svg";
import techImg1 from "../assets/images/tech1.svg";
import techImg2 from "../assets/images/tech2.svg";
import techImg3 from "../assets/images/tech3.svg";
import Searchbar from "./searchbar";
import ImgCard from "./imgCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const categories = [
  "Digital",
  "Computer",
  "Codierung",
  "Tech",
  "Netz",
  "Code",
  "Finanzieren",
  "Marketing",
];
const imgDetails = [
  {
    id: 48777,
    img: techImg1,
    tags: ["Weltraumbilder & bilder", "Erde bilder & bilder", "Naturbilder"],
  },
  {
    id: 48778,
    img: techImg2,
    tags: ["Weltraumbilder & bilder", "Erde bilder & bilder", "Naturbilder"],
  },
  {
    id: 48779,
    img: techImg3,
    tags: ["Weltraumbilder & bilder", "Erde bilder & bilder", "Naturbilder"],
  },
  {
    id: 48780,
    img: techImg1,
    tags: ["Weltraumbilder & bilder", "Erde bilder & bilder", "Naturbilder"],
  },
  {
    id: 48781,
    img: techImg2,
    tags: ["Weltraumbilder & bilder", "Erde bilder & bilder", "Naturbilder"],
  },
  {
    id: 48782,
    img: techImg3,
    tags: ["Weltraumbilder & bilder", "Erde bilder & bilder", "Naturbilder"],
  },
];
function ImagesSection() {
  return (
    <div>
      <div className="relative h-[340px] overflow-hidden">
        <img src={img} alt="Landing img" className="h-auto w-full max-w-full" />
        <div className="w-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-[200px]">
          <Searchbar />
        </div>
        <p className="absolute top-[250px] left-1/2 -translate-x-1/2 text-white text-[40px] font-bold">
          Results: <span className="capitalize">technology</span>
        </p>
      </div>
      <div className="bg-[#F5F5F5] flex gap-2 p-7 ">
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className="text-[#767676] border-[1px] border-[#767676] rounded-sm text-[13px] py-[13px] px-[50px] inline-block cursor-pointer"
            >
              {category}
            </li>
          );
        })}
      </div>
      <div className=" p-9">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="56px">
            {imgDetails.map((imgDetail) => {
              return <ImgCard key={imgDetail.id} imgDetail={imgDetail} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
        {/* {imgDetails.map((imgDetail) => {
              return <ImgCard key={imgDetail.id} imgDetail={imgDetail} />;
            })} */}
      </div>
    </div>
  );
}

export default ImagesSection;
