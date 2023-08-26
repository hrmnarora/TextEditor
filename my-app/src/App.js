import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TestUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TestUtils - light Mode";
    }
  };
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Routes>
          <Route path="/about">
            <About />/
          </Route>
          <Route path="/"> */}
            <Textform showAlert={showAlert} heading="Enter the text" mode={mode}/>
          {/* </Route>
    </Routes>  */}
    <About mode= {mode}/>
    </div> */ 
    </>
  );
}

export default App;
