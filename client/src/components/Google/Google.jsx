import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../actions/AuthAction";

const Google = () => {
  const dispatch = useDispatch();
  
  const handleCallbackResponse = async (response) => {
    dispatch(googleLogin(response.credential));
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("loginButton"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return <div id="loginButton"></div>;
};

export default Google;
