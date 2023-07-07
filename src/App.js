import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
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
      document.body.style.backgroundColor = "#3f3a3a";
      showAlert("Drak Mode has been enebled", "success");
      document.title = "TextUtlis-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enebled", "success");
      document.title = "TextUtlis-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Nav
          title="TextUtlis"
          aboutText="About TextUtlis "
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* </Nav> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
