import React from "react";
import img from "../assets/images/landing.svg";
import techImg1 from "../assets/images/tech1.svg";
import Searchbar from "./searchbar";
import Modal from "./modal";

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
  const [showModal, setShowModal] = React.useState(false);
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
        {categories.map((category) => {
          return (
            <li className="text-[#767676] border-[1px] border-[#767676] rounded-sm text-[13px] py-[13px] px-[50px] inline-block cursor-pointer">
              {category}
            </li>
          );
        })}
      </div>
      <div onClick={() => setShowModal(true)} className="cursor-pointer">
        <img alt="img" src={techImg1} className="w-1/3" />
        <div className="flex gap-1 mt-[11px]">
          {[
            "Weltraumbilder & bilder",
            "Erde bilder & bilder",
            "Naturbilder",
          ].map((tag) => {
            return (
              <div className="text-[#767676] rounded-sm text-[11px] px-[7px] py-1 inline-block bg-[#F5F5F5]">
                {tag}
              </div>
            );
          })}
        </div>
      </div>
      {showModal ? (
        <Modal setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default ImagesSection;
