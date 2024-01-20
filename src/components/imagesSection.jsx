import React, { useEffect } from "react";
import img from "../assets/images/landing.svg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link, useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { useImages } from "../contexts/imageContext";
import Searchbar from "./searchbar";
import ImgCard from "./imgCard";

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
  const { imagesData, setCategory, loading } = useImages();
  const { category } = useParams();
  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);
  return (
    <div>
      <div className="relative h-[340px] max-sm:h-1/2 overflow-hidden">
        <img src={img} alt="Landing img" className="h-auto w-full max-w-full" />
        <div className="w-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-[200px] max-sm:top-48">
          <Searchbar />
        </div>
        <p className="w-full absolute top-[250px] max-sm:top-60 text-white text-[40px] max-sm:text-3xl font-bold text-center">
          Results: <span className="capitalize">{category}</span>
        </p>
      </div>
      <div className="bg-[#F5F5F5] flex gap-2 p-7 max-md:p-5 max-sm:p-4 max-md:overflow-x-scroll">
        {categories.map((category, index) => {
          return (
            <Link
              to={`/${category}`}
              key={index}
              className="text-[#767676] border-[1px] border-[#767676] rounded-sm text-[13px] py-[13px] max-md:py-2 px-[48px] max-md:px-10 max-sm:px-7 inline-block cursor-pointer"
            >
              {category}
            </Link>
          );
        })}
      </div>
      <div className="p-9 max-sm:p-6">
        {loading ? (
          <div className="w-full flex justify-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              color="#4fa94d"
            />
          </div>
        ) : (
          <>
            {imagesData.length > 0 ? (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry columnsCount={3} gutter="56px">
                  {imagesData.map((imgData) => {
                    return (
                      <Link key={imgData.id} to={`/${category}/${imgData.id}`}>
                        <ImgCard imgDetail={imgData} />
                      </Link>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <div className="text-center text-[20px] font-semibold">
                No Results found for your Search!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ImagesSection;
