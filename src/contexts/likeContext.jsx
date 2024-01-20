import { createContext, useState } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import toast from "react-hot-toast";
import { useAuth, useHistory } from "../hooks";

const LikeContext = createContext();
const LikeProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const { dispatch } = useHistory();
  const getLiked = async () => {
    let docId;
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      docId = doc.id;
    });
    const likedSnapshot = await getDocs(
      collection(db, `userInfo/${docId}/liked`)
    );
    let images = [];
    likedSnapshot.forEach((doc) => {
      images.push(doc.data());
    });
    dispatch({ type: "SET_LIKED", payload: images });
    setLoading(false);
  };

  const addToLiked = async (category, imageDetail) => {
    const { id, largeImageURL, tags } = imageDetail;
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      await addDoc(collection(db, `userInfo/${doc.id}/liked`), {
        id,
        largeImageURL,
        tags,
        category,
      });
    });
    toast.success("Liked!");
    getLiked();
  };

  const value = { loading, getLiked, addToLiked };
  return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};

export { LikeContext, LikeProvider };
