import toast from "react-hot-toast";

const shareClickHandler = () => {
  const url = window.location.href;
  console.log(url)
  navigator.clipboard.writeText(url);
  toast.success("Copied to clipBoard!", {
    duration: 2000,
    position: "top-right",
  });
};

export default shareClickHandler;
