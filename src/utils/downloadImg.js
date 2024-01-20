import { db } from "../firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import FileSaver from "file-saver";

const downloadClickHandler = async (
  downloadImgURL,
  setDisableDownload,
  user,
  response,
  imageDetail
) => {
  const { id, largeImageURL, tags } = imageDetail;
  FileSaver.saveAs(downloadImgURL, "download.jpg");
  setDisableDownload(true);
  const historyImgId = response.map((imgData) => imgData.id);
  if (!historyImgId.includes(id)) {
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      await addDoc(collection(db, `userInfo/${doc.id}/history`), {
        id,
        largeImageURL,
        tags,
      });
    });
  }
};

export default downloadClickHandler;
