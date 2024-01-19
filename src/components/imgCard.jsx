import React from "react";
import { Link } from "react-router-dom";

function ImgCard({ imgDetail, category }) {
  const { id, largeImageURL, tags } = imgDetail;

  return (
    <>
      <Link to={`/${category}/${id}`} className="cursor-pointer w-[360px]">
        <img alt="img" src={largeImageURL} className="w-[360px]" />
        <div className="flex gap-1 mt-[11px]">
          {tags.split(",").map((tag, index) => {
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
      </Link>
    </>
  );
}

export default ImgCard;
