import Navbar from "./components/navbar";
import img from "./assets/images/landing.svg";
import { RiSearch2Line } from "react-icons/ri";
function App() {
  return (
    <div className="">
      <div className="h-screen relative">
        <Navbar />
        <div className="relative flex justify-center">
          <img src={img} className="h-auto w-full max-w-full" />
          <div className="text-white absolute top-40 max-md:top-32 w-2/3 text-center">
            <h1 className="font-bold text-[70px] max-md:text-[46px] max-sm:text-[22px]">
              Discover over 2,000,000 free Stock Images.
            </h1>
            <form className="w-4/5 absolute top-80 max-md:top-64 max-sm:top-36 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <input
                  type="search"
                  className="outline-none block w-full p-4 max-sm:p-2 ps-16 border-2 border-[rgb(182,182,182,0.5)] backdrop-blur-lg bg-[rgb(182,182,182,0.2)] shadow-inset rounded-lg px-10 max-sm:px-6"
                  placeholder="Search"
                />
                <div className="max-sm:hidden border-r-2 pr-4 my-3 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <RiSearch2Line
                    style={{ color: "white" }}
                    className="size-5"
                  />
                </div>
                <button
                  type="submit"
                  className="absolute end-2.5 bottom-2.5 border-2 border-white rounded-lg py-[2px] max-sm:py-0 px-[14px] bg-transparent"
                >
                  GO!
                </button>
              </div>
            </form>
            <div className="absolute top-[370px] max-md:top-[300px] max-sm:top-[136px] left-1/2 -translate-x-1/2 text-[13px] max-md:[10px] inline-block px-6 max-md:px-3 max-sm:px-0 py-1 max-sm:py-0 border-2 border-[rgb(182,182,182,0.5)] backdrop-blur-lg bg-[rgb(182,182,182,0.2)] shadow-inset rounded-lg">
              <div className="line-clamp-1">
                <span className="font-semibold">Trending:</span> flowers, love,
                forest, river
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
