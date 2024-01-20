import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

function PublicRoutes({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
}

export default PublicRoutes;
