import React from "react";
import Modal from "./modal";

function ImgCard({ imgDetail }) {
  const { img, tags } = imgDetail;
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer w-[360px]"
      >
        <img alt="img" src={img} className="w-[360px]" />
        <div className="flex gap-1 mt-[11px]">
          {tags.map((tag, index) => {
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
        {showModal ? (
          <Modal setShowModal={setShowModal} imgDetail={imgDetail} />
        ) : null}
      </div>
    </>
  );
}

export default ImgCard;
