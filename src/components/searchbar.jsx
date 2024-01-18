import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Searchbar() {
  const [input, setInput] = useState();
  return (
    <form className="text-white ">
      <div className="relative">
        <input
          className="outline-none block w-full p-4 max-sm:p-2 ps-16 border-2 border-[rgb(182,182,182,0.5)] backdrop-blur-lg bg-[rgb(182,182,182,0.2)] shadow-inset rounded-lg px-10 max-sm:px-6"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="max-sm:hidden border-r-2 pr-4 my-3 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <RiSearch2Line style={{ color: "white" }} className="size-5" />
        </div>
        <Link
          to={input && `${input}`}
          type="submit"
          className="absolute end-2.5 bottom-3.5 max-sm:bottom-2 border-2 border-white rounded-lg py-[2px] max-sm:py-0 px-[14px] bg-transparent"
        >
          GO!
        </Link>
      </div>
    </form>
  );
}

export default Searchbar;
