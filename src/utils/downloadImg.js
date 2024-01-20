import { db } from "../firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import FileSaver from "file-saver";

const downloadClickHandler = async (
  downloadImgURL,
  setDisableDownload,
  user,
  history,
  imageDetail
) => {
  const { id, largeImageURL, tags } = imageDetail;
  FileSaver.saveAs(downloadImgURL, "download.jpg");
  setDisableDownload(true);
  const historyImgId = history.map((imgData) => imgData.id);
  console.log(historyImgId.includes(id))
  if (!historyImgId.includes(id)) {
    const q = query(
      collection(db, `userInfo`),
      where("userId", "==", user.uid)
    );
    console.log("dsjfn")
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      console.log(`userInfo/${doc.id}/history`)
      await addDoc(collection(db, `userInfo/${doc.id}/history`), {
        id,
        largeImageURL,
        tags,
      });
    });
  }
};

export default downloadClickHandler;
