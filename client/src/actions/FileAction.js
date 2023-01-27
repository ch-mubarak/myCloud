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

export const uploadFile = (file) => async (dispatch) => {
  dispatch({ type: "FILE_UPLOADING_START" });
  try {
    const { data } = await FileApi.uploadFile(file);
    dispatch({ type: "FILE_UPLOAD_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "FILE_UPLOAD_FAIL" });
  }
};
