import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Uppercase was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-5" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <div className="container my-3">
          <h1>your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
