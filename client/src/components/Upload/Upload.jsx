import { useRef, useState } from "react";
import { uploadFile } from "../../api/FileRequest";
import "./Upload.css";

const Upload = () => {
  const fileRef = useRef();
  const handleClick = () => {
    fileRef.current.click();
  };

  const handleUpload = async (e) => {
    if (!(e.target.files && e.target.files[0])) {
      return;
    }
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("name", file.name);
    formData.append("file", file);
    try {
      const { data } = await uploadFile(formData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="upload" onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Upload_icon_-_Font_Awesome_-_Red.svg/1792px-Upload_icon_-_Font_Awesome_-_Red.svg.png"
        alt="upload"
      />
      <button>Upload</button>
      <input onChange={handleUpload} ref={fileRef} hidden type="file" />
    </div>
  );
};

export default Upload;
