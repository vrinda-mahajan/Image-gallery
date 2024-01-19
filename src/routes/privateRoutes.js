import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/signup" replace={true} />;
  }
  return children;
}

export default PrivateRoutes;
