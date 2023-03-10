import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state?.authReducer?.authData?.user);
  if (user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default PublicRoute;
