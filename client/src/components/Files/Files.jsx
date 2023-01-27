import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../../actions/FileAction";
import File from "../File/File";
import "./Files.css";

const Files = () => {
  const dispatch = useDispatch();
  const { files, loading } = useSelector((state) => state.fileReducer);

  useEffect(() => {
    dispatch(fetchFiles());
  }, []);
  return (
    <div className="files">
      {loading && <p>Fetching...</p>}
      {files?.map((file) => (
        <File key={file._id} data={file} />
      ))}
    </div>
  );
};

export default Files;
