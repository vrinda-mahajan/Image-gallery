import React from "react";
import img from "../assets/images/landing.svg";
import Searchbar from "./searchbar";
import ImgCard from "./imgCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useImages } from "../contexts/imageContext";
import { useParams } from "react-router-dom";

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

function ImagesSection() {
  const { imagesData, setCategory } = useImages();
  const { category } = useParams();
  setCategory(category);
  return (
    <div>
      <div className="relative h-[340px] overflow-hidden">
        <img src={img} alt="Landing img" className="h-auto w-full max-w-full" />
        <div className="w-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-[200px]">
          <Searchbar />
        </div>
        <p className="absolute top-[250px] left-1/2 -translate-x-1/2 text-white text-[40px] font-bold">
          Results: <span className="capitalize">{category}</span>
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
      <div className="p-9">
        {imagesData.length > 0 ? (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="56px">
              {imagesData.map((imgData) => {
                return (
                  <ImgCard
                    key={imgData.id}
                    imgDetail={imgData}
                    category={category}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <div className="text-center text-[20px] font-semibold">
            No Results found for your Search!
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagesSection;
