import { useContext } from "react";
import { HistoryContext } from "../contexts";

const useHistory = () => useContext(HistoryContext);

export { useHistory };
