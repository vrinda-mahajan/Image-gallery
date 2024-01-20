import React, { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import ImgCard from "../components/imgCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useHistory } from "../hooks/useHistory";

function History() {
  const {
    state: { history },
    loading,
    getHistory,
  } = useHistory();
  useEffect(() => {
    getHistory();
  }, [getHistory]);
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
            History
          </h1>
          {history.length > 0 ? (
            <div>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry columnsCount={3} gutter="56px">
                  {history.map((historyImg) => (
                    <ImgCard key={historyImg.id} imgDetail={historyImg} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          ) : (
            <div className="text-center text-[20px] font-semibold h-screen">
              Nothing in history yet!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default History;
