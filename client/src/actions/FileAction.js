import * as FileApi from "../api/FileRequest";

export const fetchFiles = () => async (dispatch) => {
  dispatch({ type: "FETCH_FILES_PENDING" });
  try {
    const { data } = await FileApi.fetchFiles();
    dispatch({ type: "FETCH_FILES_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "FETCH_FILES_FAIL" });
  }
};
