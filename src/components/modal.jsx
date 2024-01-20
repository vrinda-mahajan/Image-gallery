import React, { useEffect, useRef, useState } from "react";
import closeSq from "../assets/icons/closesquare.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import shareClickHandler from "../utils/shareImg";
import downloadClickHandler from "../utils/downloadImg";
import { useAuth } from "../hooks/useAuth";
import { useFirestore } from "../hooks/useFirestore";

function Modal() {
  const params = useParams();
  const [imageDetail, setImageDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [disableDownload, setDisableDownload] = useState(false);
  const { user } = useAuth();
  const {
    historyData: { response },
  } = useFirestore();
  let navigate = useNavigate();
  
  useEffect(() => {
    const getImage = async () => {
      setLoading(true);
      try {
        const {
          data: { hits },
        } = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${params.category}&id=${params.id}&image_type=photo&pretty=true`
        );
        setImageDetail(hits[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getImage();
  }, [params]);

  const { id, largeImageURL, tags, previewURL, imageWidth, imageHeight } =
    imageDetail;
  console.log(imageDetail);
  const modalRef = useRef();
  useEffect(() => {
    let closeList = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        navigate(-1);
      }
    };
    document.addEventListener("mousedown", closeList);
    return () => document.removeEventListener("mousedown", closeList);
  });

  return (
    <div className="absolute top-0">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
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
          <div
            ref={modalRef}
            className="relative w-auto my-6 mx-auto max-w-[85%]"
          >
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between py-2 px-6 bg-[#F5F5F5] rounded-t-xl">
                <h3 className="text-[20px] font-medium">Preview ID: {id}</h3>
                <button
                  className="ml-auto"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <img alt="close square" src={closeSq} />
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex">
                <img
                  className="min-w-[500px] rounded object-cover h-[350px] overflow-hidden "
                  alt="tech img"
                  src={largeImageURL}
                />
                <div className="w-1/3 text-[#3B4043] mx-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text[21px] tracking-wide">Download</h2>
                    <button
                      title="copy link"
                      onClick={shareClickHandler}
                      className="border-[1px] border-[#3B4043] rounded py-[2px] px-[14px] bg-transparent my-3"
                    >
                      Share
                    </button>
                  </div>
                  <div className="border-[1px] w-[275px] rounded-lg mt-3">
                    <label
                      htmlFor="small"
                      className="py-2 px-[14px] border-b-[1px] flex justify-between"
                    >
                      <p>Small</p>
                      <div className="flex">
                        <p className="font-bold">640 X 960</p>
                        <input id="small" type="radio" className="ml-6" />
                      </div>
                    </label>
                    <label
                      htmlFor="medium"
                      className="py-2 px-[14px] border-b-[1px] flex justify-between"
                    >
                      <p>Medium</p>
                      <div className="flex">
                        <p className="font-bold">1920 X 2660</p>
                        <input id="medium" type="radio" className="ml-6" />
                      </div>
                    </label>
                    <label
                      htmlFor="big"
                      className="py-2 px-[14px] border-b-[1px] flex justify-between"
                    >
                      <p>Big</p>
                      <div className="flex">
                        <p className="font-bold">2400 X 3660</p>
                        <input id="big" type="radio" className="ml-6" />
                      </div>
                    </label>
                    <label
                      htmlFor="big"
                      className="py-2 px-[14px] border-b-[1px] flex justify-between"
                    >
                      <p>Big</p>
                      <div className="flex">
                        <p className="font-bold">2400 X 3660</p>
                        <input id="big" type="radio" className="ml-6" />
                      </div>
                    </label>
                  </div>
                  <button
                    onClick={() =>
                      downloadClickHandler(
                        previewURL,
                        setDisableDownload,
                        user,
                        response,
                        imageDetail
                      )
                    }
                    className="bg-[#4BC34B] w-[275px] rounded-lg text-[11px] font-semibold py-[10px] text-white my-4 disabled:cursor-not-allowed"
                    disabled={disableDownload}
                  >
                    Download for free!
                  </button>
                  <h2 className="text[21px] tracking-wide font-medium">
                    Information
                  </h2>
                  <div className="mt-3 flex flex-wrap justify-between w-[280px]">
                    <div className="font-semibold">
                      <span className="text-[11px] text-[#717579]">User</span>
                      <p>Josch13</p>
                    </div>
                    <div className="font-semibold">
                      <span className="text-[11px] text-[#717579]">User</span>
                      <p>Josch13</p>
                    </div>
                    <div className="font-semibold">
                      <span className="text-[11px] text-[#717579]">User</span>
                      <p>Josch13</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex gap-1 items-center pb-6 px-6 rounded-b-lg">
                <span className="font-semibold text-[#3B4043]">Tags: </span>
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
          </div>
        )}
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}

export default Modal;
