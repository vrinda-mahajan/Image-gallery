import React from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
}

export default PublicRoutes;
