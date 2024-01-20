import toast from "react-hot-toast";

const url = window.location.href;

const shareClickHandler = () => {
  navigator.clipboard.writeText(url);
  toast.success("Copied to clipBoard!", {
    duration: 2000,
    position: "top-right",
  });
};

export default shareClickHandler;
