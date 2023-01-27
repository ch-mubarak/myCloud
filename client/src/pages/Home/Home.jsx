import Files from "../../components/Files/Files";
import Upload from "../../components/Upload/Upload";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Files />
      <Upload />
    </div>
  );
};

export default Home;
