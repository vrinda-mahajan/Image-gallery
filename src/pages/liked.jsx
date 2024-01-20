import React, { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import ImgCard from "../components/imgCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useHistory } from "../hooks/useHistory";
import { useLike } from "../hooks/useLike";

function Liked() {
  const { loading, getLiked } = useLike();
  const {
    state: { liked },
  } = useHistory();

  useEffect(() => {
    getLiked();
  }, [getLiked]);
  return (
    <div className="pt-28 bg-[#d6d6d6] px-8">
      {loading ? (
        <div className="w-full flex justify-center items-center h-screen">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            color="#4fa94d"
          />
        </div>
      ) : (
        <div>
          <h1 className="text-center text-[20px] font-semibold mb-6">
            Liked Images
          </h1>
          {liked.length > 0 ? (
            <div>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry columnsCount={3} gutter="56px">
                  {liked.map((likedImg) => (
                    <ImgCard key={likedImg.id} imgDetail={likedImg} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          ) : (
            <div className="text-center text-[20px] font-semibold h-screen">
              No Liked Images yet!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Liked;
