import FileSaver from "file-saver";

const downloadClickHandler = async (
  downloadImgURL,
  setDisableDownload,
  addToHistory,
  history,
  category,
  imageDetail
) => {
  const { id } = imageDetail;
  FileSaver.saveAs(downloadImgURL, "download.jpg");
  setDisableDownload(true);
  const historyImgId = history.map((imgData) => imgData.id);
  if (!historyImgId.includes(id)) {
    addToHistory(category, imageDetail);
  }
};

export default downloadClickHandler;
