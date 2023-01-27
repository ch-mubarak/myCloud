import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../../actions/FileAction";
import File from "../File/File";
import "./Files.css";

const Files = () => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.fileReducer);

  useEffect(() => {
    dispatch(fetchFiles());
  }, []);
  return (
    <div className="files">
      {files.map((file) => (
        <File key={file._id} data={file} />
      ))}
    </div>
  );
};

export default Files;
