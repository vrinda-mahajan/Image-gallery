import React from "react";

function ImgCard({ imgDetail }) {
  const { largeImageURL, tags } = imgDetail;
  return (
    <>
      <div className="cursor-pointer w-[360px] max-sm:w-full">
        <img
          alt="img"
          src={largeImageURL}
          className="w-[360px] rounded max-sm:w-full"
        />
        <div className="flex gap-1 mt-[11px]">
          {tags &&
            tags.split(",").map((tag, index) => {
              return (
                <div
                  key={index}
                  className="text-[#767676] rounded-sm text-[11px] px-[7px] py-1 inline-block bg-[#F5F5F5]"
                >
                  {tag}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ImgCard;
