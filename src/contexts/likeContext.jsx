import { createContext, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";
import toast from "react-hot-toast";
import { useAuth, useHistory } from "../hooks";

const LikeContext = createContext();
const LikeProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const { state, dispatch } = useHistory();
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
    const documentData = {
      id,
      largeImageURL,
      tags,
      category,
    };
    toast.success("Liked!");
    dispatch({ type: "ADD_TO_LIKED", payload: documentData });
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      await addDoc(collection(db, `userInfo/${doc.id}/liked`), documentData);
    });
  };

  const deleteFromLiked = async (imgId) => {
    const filteredData = state.liked.filter((imgData) => imgData.id !== imgId);
    dispatch({ type: "DELETE_FROM_LIKED", payload: filteredData });
    let userDocId;
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      userDocId = doc.id;
    });
    let likedDocId;
    const likedQuery = query(
      collection(db, `userInfo/${userDocId}/liked`),
      where("id", "==", imgId)
    );
    const likedSnapshot = await getDocs(likedQuery);
    likedSnapshot.forEach(async (doc) => {
      likedDocId = doc.id;
    });
    await deleteDoc(doc(db, `userInfo/${userDocId}/liked`, likedDocId));
  };
  const value = { loading, getLiked, addToLiked, deleteFromLiked };
  return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};

export { LikeContext, LikeProvider };
