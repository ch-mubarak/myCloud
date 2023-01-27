import { useRef } from "react";
import { uploadFile } from "../../api/FileRequest";
import { UilUploadAlt } from "@iconscout/react-unicons";
import "./Upload.css";
import { useSelector } from "react-redux";

const Upload = () => {
  const { uploading } = useSelector((state) => state.fileReducer);
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
      const { data } = await uploadFile(fileData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="upload" onClick={handleClick}>
      <UilUploadAlt size={200} />
      <button>Upload</button>
      <input onChange={handleUpload} ref={fileRef} hidden type="file" />
    </div>
  );
};

export default Upload;
