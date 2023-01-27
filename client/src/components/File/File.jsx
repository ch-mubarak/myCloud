import "./File.css";
import axios from "../../config/axios";
import { UilFile } from "@iconscout/react-unicons";
import fileDownload from "js-file-download";

const File = ({ data }) => {
  const handleDownload = async () => {
    try {
      const response = await axios({
        url: `/files/${data._id}`,
        method: "GET",
        responseType: "blob",
      });
      console.log(response)
      fileDownload(response.data, data.fileName);
    } catch (error) {}
  };
  return (
    <div className="file" onClick={handleDownload}>
      <UilFile size={50} />
      <p>{data.fileName}</p>
    </div>
  );
};

export default File;
