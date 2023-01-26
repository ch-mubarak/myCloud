import * as AuthApi from "../api/AuthRequest";

export const login = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.login(formData);
    dispatch({ type: "AUTH_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "AUTH_FAIL", payload: err.response?.data });
    console.log(err);
  }
};

export const googleLogin = (googleToken) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.googleLogin(googleToken);
    console.log(data);
    dispatch({ type: "AUTH_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "AUTH_FAIL", payload: err.response?.data });
    console.log(err);
  }
};
