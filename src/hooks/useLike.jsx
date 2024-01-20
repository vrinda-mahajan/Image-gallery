import { useContext } from "react";
import { LikeContext } from "../contexts/likeContext";

const useLike = () => useContext(LikeContext);

export { useLike };
