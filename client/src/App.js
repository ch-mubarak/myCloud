import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Auth /> */}
      <Home />
    </div>
  );
}

export default App;
