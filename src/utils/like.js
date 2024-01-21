import toast from "react-hot-toast";

const likeClickHandler = async (category, addToLiked, liked, imageDetail) => {
  const { id } = imageDetail;
  const likedImgId = liked.map((imgData) => imgData.id);
  if (!likedImgId.includes(id)) {
    addToLiked(category, imageDetail);
  } else {
    toast("Already Liked!");
  }
};

export default likeClickHandler;
