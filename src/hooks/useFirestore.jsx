import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";

const useFirestore = () => {
  const [historyData, sethistoryData] = useState({
    response: [],
    loading: true,
  });
  const { user } = useAuth();

  useEffect(() => {
    sethistoryData({
      response: [],
      loading: true,
    });
    const getHistoryDocs = async () => {
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
      historySnapshot.forEach((doc) => {
        sethistoryData((prev) => ({
          ...prev,
          response: [
            ...prev.response,
            {
              id: doc.data().id,
              imgUrl: doc.data().largeImageURL,
              tags: doc.data().tags,
            },
          ],
        }));
      });
      sethistoryData((prev) => ({
        ...prev,
        loading: false,
      }));
    };
    user && getHistoryDocs();
  }, [user, sethistoryData]);
  return { historyData };
};
export { useFirestore };
