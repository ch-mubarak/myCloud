import "./File.css";
import axios from "../../config/axios";
import { UilFile } from "@iconscout/react-unicons";
import fileDownload from "js-file-download";

const File = ({ data }) => {
  let fileName;
  if (data?.fileName?.length > 10) {
    fileName = data.fileName.substring(0, 10) + "...";
  } else {
    fileName = data.fileName;
  }
  const handleDownload = async () => {
    try {
      const response = await axios({
        url: `/files/${data?._id}`,
        method: "GET",
        responseType: "blob",
      });
      fileDownload(response.data, data.fileName);
    } catch (error) {}
  };
  return (
    <div className="file" onClick={handleDownload}>
      <UilFile size={50} />
      <p>{fileName}</p>
    </div>
  );
};

export default File;
