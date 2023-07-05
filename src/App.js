import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3f3a3a";
      showAlert("Drak Mode has been enebled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enebled", "success");
    }
  };
  return (
    <>
      <Nav
        title="TextUtlis"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
