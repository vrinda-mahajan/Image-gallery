import { useContext } from "react";
import { HistoryContext } from "../contexts/historyContext";

const useHistory = () => useContext(HistoryContext);

export { useHistory };
