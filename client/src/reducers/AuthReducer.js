const initialState = {
  authData: null,
  loading: null,
  error: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false, message: null };

    case "AUTH_SUCCESS":
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        authData: action.payload,
        loading: false,
        error: false,
        message: null,
      };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        message: action?.payload?.message,
      };

    default:
      return state;
  }
};

export default authReducer;
