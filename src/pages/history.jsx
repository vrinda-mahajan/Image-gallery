import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import { ColorRing } from "react-loader-spinner";
import ImgCard from "../components/imgCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function History() {
  const {
    historyData: { response, loading },
  } = useFirestore();
  return (
    <div className="pt-28 bg-[#d6d6d6] h-screen">
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
          <h1 className="text-center text-[20px] font-semibold">
            History Page
          </h1>
          {response.length > 0 ? (
            <div>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry columnsCount={3} gutter="56px">
                  {response.map((historyImg) => (
                    <ImgCard
                      key={historyImg.id}
                      imgDetail={{
                        id: historyImg.id,
                        largeImageURL: historyImg.imgUrl,
                        tags: historyImg.tags,
                      }}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          ) : (
            <div className="text-center text-[20px] font-semibold">
              Nothing in history yet!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default History;
