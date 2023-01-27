import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.authReducer?.authData?.user);
  if (user) {
    return children;
  } else {
    return <Navigate to={"/auth"} />;
  }
};

export default PrivateRoute;
