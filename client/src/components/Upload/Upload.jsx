import { useRef } from "react";
import { UilUploadAlt } from "@iconscout/react-unicons";
import { uploadFile } from "../../actions/FileAction";
import "./Upload.css";
import { useDispatch, useSelector } from "react-redux";

const Upload = () => {
  const { uploading } = useSelector((state) => state.fileReducer);
  const dispatch = useDispatch();
  const fileRef = useRef();
  const handleClick = () => {
    fileRef.current.click();
  };

  const handleUpload = async (e) => {
    if (!(e.target.files && e.target.files[0])) {
      return;
    }
    let file = e.target.files[0];
    const fileData = new FormData();
    const fileName = Date.now() + file.name;
    fileData.append("name", fileName);
    fileData.append("file", file);
    try {
      dispatch(uploadFile(fileData));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="upload">
        <UilUploadAlt size={200} />
        {!uploading && <button onClick={handleClick}>Upload</button>}
        {uploading && <h3>uploading....</h3>}
        <input onChange={handleUpload} ref={fileRef} hidden type="file" />
      </div>
    </>
  );
};

export default Upload;
