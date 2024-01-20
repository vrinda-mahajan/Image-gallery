import React, { useEffect, useRef, useState } from "react";
import closeSq from "../assets/icons/closesquare.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import shareClickHandler from "../utils/shareImg";
import downloadClickHandler from "../utils/downloadImg";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useHistory } from "../hooks/useHistory";
import likeClickHandler from "../utils/like";
import { useLike } from "../hooks/useLike";
import { GoHeart, GoHeartFill } from "react-icons/go";

function Modal() {
  const params = useParams();
  const [imageDetail, setImageDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [disableDownload, setDisableDownload] = useState(false);
  const { user } = useAuth();
  const {
    state: { history, liked },
    addToHistory,
  } = useHistory();
  const { addToLiked } = useLike();
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

  const {
    id,
    largeImageURL,
    tags,
    previewURL,
    imageWidth,
    imageHeight,
    views,
    downloads,
    likes,
  } = imageDetail;
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
  const downloadSizes = [
    { name: "Small", width: 640, height: 960 },
    { name: "Medium", width: 1920, height: 2660 },
    { name: "Big", width: 2400, height: 3660 },
    { name: "Original", width: imageWidth, height: imageHeight },
  ];

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
              <div className="relative p-6 flex max-md:flex-col">
                <img
                  className="min-w-[500px] max-md:min-w-full rounded object-cover h-[350px] max-md:h-[200px] max-sm:h-[180px] overflow-hidden "
                  alt="tech img"
                  src={largeImageURL}
                />
                <div className="w-1/3 max-md:w-full text-[#3B4043] mx-8 max-md:mx-1">
                  <div className="flex justify-between items-center">
                    <h2 className="text[21px] tracking-wide">Download</h2>
                    <div className="flex gap-1">
                      {liked.find((img) => img.id === id) ? (
                        <button
                          title="like"
                          className="border-[1px] border-[#3B4043] rounded py-[2px] px-1 bg-transparent my-3"
                        >
                          <GoHeartFill />
                        </button>
                      ) : (
                        <button
                          title="like"
                          onClick={() =>
                            likeClickHandler(
                              params.category,
                              addToLiked,
                              liked,
                              imageDetail
                            )
                          }
                          className="border-[1px] border-[#3B4043] rounded py-[2px] px-1 bg-transparent my-3"
                        >
                          <GoHeart />
                        </button>
                      )}
                      <button
                        title="copy link"
                        onClick={shareClickHandler}
                        className="border-[1px] border-[#3B4043] rounded py-[2px] px-[14px] bg-transparent my-3"
                      >
                        Share
                      </button>
                    </div>
                  </div>
                  <div className="border-[1px] w-[275px] max-md:w-full rounded-lg mt-3">
                    {downloadSizes.map((size, index) => (
                      <label
                        key={index}
                        htmlFor={size.name}
                        className="py-2 px-[14px] border-b-[1px] flex justify-between"
                      >
                        <p>{size.name}</p>
                        <div className="flex">
                          <p className="font-bold">{`${size.width} X ${size.height}`}</p>
                          <input
                            name="downloadSize"
                            id={size.name}
                            type="radio"
                            className="ml-6"
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                  {user ? (
                    <button
                      onClick={() =>
                        downloadClickHandler(
                          previewURL,
                          setDisableDownload,
                          addToHistory,
                          history,
                          params.category,
                          imageDetail
                        )
                      }
                      className="bg-[#4BC34B] w-[275px] max-md:w-full rounded-lg text-[11px] font-semibold py-[10px] text-white my-4 disabled:cursor-not-allowed"
                      disabled={disableDownload}
                    >
                      Download for free!
                    </button>
                  ) : (
                    <button
                      onClick={() => toast.error("Login to Download!")}
                      className="bg-[#4BC34B] w-[275px] max-md:w-full rounded-lg text-[11px] font-semibold py-[10px] text-white my-4 disabled:cursor-not-allowed"
                      disabled={disableDownload}
                    >
                      Download for free!
                    </button>
                  )}

                  <h2 className="text[21px] tracking-wide font-medium">
                    Information
                  </h2>
                  <div className="mt-3 flex flex-wrap justify-between w-[280px]">
                    <div className="font-semibold">
                      <span className="text-[11px] text-[#717579]">Views</span>
                      <p>{views}</p>
                    </div>
                    <div className="font-semibold">
                      <span className="text-[11px] text-[#717579]">
                        Downloads
                      </span>
                      <p>{downloads}</p>
                    </div>
                    <div className="font-semibold">
                      <span className="text-[11px] text-[#717579]">Likes</span>
                      <p>{likes}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex flex-wrap gap-1 items-center pb-6 px-6 rounded-b-lg">
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
