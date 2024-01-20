import { useContext } from "react";
import { LikeContext } from "../contexts";

const useLike = () => useContext(LikeContext);

export { useLike };
