import toast from "react-hot-toast";

const shareClickHandler = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  toast.success("Copied to clipBoard!", {
    duration: 2000,
    position: "top-right",
  });
};

export default shareClickHandler;
