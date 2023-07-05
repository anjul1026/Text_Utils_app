import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("dark"); //whether dark mode is enable or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode = "dark";
    } else {
      setMode = "light";
    }
  };
  return (
    <>
      <Nav
        title="TextUtlis"
        aboutText="hello"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
