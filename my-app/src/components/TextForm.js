import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success")

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const Cleartext = () => {
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared", "success")

  };
  const handleCopy = () => {
    var text = document.getElementById("Mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success")

  };
  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
          style = {{backgroundColor:props.mode==='dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black'}}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2 my-1" onClick={Cleartext}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>

      </div>

      <div className="container" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview"}</p>
      </div>
    </>
  );
}
