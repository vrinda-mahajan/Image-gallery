import { createContext, useReducer } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import { appReducer, initialReducerValue } from "../reducer/appReducer";
import { useAuth } from "../hooks";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const [state, dispatch] = useReducer(appReducer, initialReducerValue);

  const getHistory = async () => {
    let docId;
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      docId = doc.id;
    });
    const historySnapshot = await getDocs(
      collection(db, `userInfo/${docId}/history`)
    );
    let images = [];
    historySnapshot.forEach((doc) => {
      images.push(doc.data());
    });
    dispatch({ type: "SET_HISTORY", payload: images });
    setLoading(false);
  };

  const addToHistory = async (category, imageDetail) => {
    const { id, largeImageURL, tags } = imageDetail;
    const documentData = {
      id,
      largeImageURL,
      tags,
      category,
    };
    dispatch({ type: "ADD_TO_HISTORY", payload: documentData });
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      await addDoc(collection(db, `userInfo/${doc.id}/history`), documentData);
    });
  };

  const value = { state, dispatch, loading, getHistory, addToHistory };
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

export { HistoryContext, HistoryProvider };
