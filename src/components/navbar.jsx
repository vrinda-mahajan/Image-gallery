import React from "react";

function Navbar() {
  return (
    <div className="flex font-semibold text-white items-center justify-between max-sm:justify-end border-2 border-[rgb(182,182,182,0.5)] backdrop-blur bg-[rgb(182,182,182,0.3)] shadow-inset rounded-[9px] px-10 max-sm:px-6 fixed mt-10 w-full max-w-[calc(100%-64px)] mx-8">
      <h4 className="max-sm:hidden">Homepage</h4>
      <div className="flex gap-[22px] max-sm:gap-4">
        <button className="">Login</button>
        <button className="border-2 border-white rounded-lg py-[2px] px-[14px] bg-transparent my-3">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Navbar;
