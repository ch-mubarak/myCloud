const initialState = {
  files: [],
  uploading: false,
  loading: false,
  error: false,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FILES_PENDING":
      return {
        ...state,
        loading: true,
        error: false,
        uploading: false,
      };

    case "FETCH_FILES_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        files: [...action.payload],
        loading: false,
        error: false,
      };

    case "FETCH_FILES_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "FILE_UPLOADING_START":
      return {
        ...state,
        uploading: true,
        loading: false,
        error: false,
      };

    case "FILE_UPLOAD_SUCCESS":
      return {
        ...state,
        files: [action.payload.file, ...state.files],
        uploading: false,
        error: false,
      };

    case "FILE_UPLOAD_FAIL":
      return {
        ...state,
        uploading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default fileReducer;
