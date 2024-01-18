import React from "react";

const categories = [
  "Digital",
  "Computer",
  "Codierung",
  "Tech",
  "Netz",
  "Code",
  "Marketing",
];
function ImagesSection() {
  return (
    <div>
      <div>
        {categories.map((category) => {
          return (
            <div className="text-[#767676] border-1 border-[#767676] text-[13px] py-[13px] px-[50px]">
              {category}
            </div>
          );
        })}
      </div>
      <div>Hello</div>
    </div>
  );
}

export default ImagesSection;
