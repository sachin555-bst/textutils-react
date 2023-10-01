import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase","success");
  };
  const handleloClick = () => {
    // console.log("uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase","success");
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCleartext = () => {
    // console.log("on change");
    let newtext = "";
    setText(newtext);
    props.showAlert("Text cleared","success");
  };

  const lengthanalyze = () => {
    const words = text.split(/\s+/); // Split text into words using whitespace as delimiter
    let shortest = "";
    let longest = "";

    if (words.length > 0) {
      shortest = words.reduce((a, b) => (a.length <= b.length ? a : b));
      longest = words.reduce((a, b) => (a.length >= b.length ? a : b));
    }

    setShortestWord(shortest);
    setLongestWord(longest);
  };

  //const[count ,setCount] = useState(0);  --->sytnax of usestate hooks

  const [text, setText] = useState("");
  const [shortestWord, setShortestWord] = useState("");
  const [longestWord, setLongestWord] = useState("");

  //text = "new text";  //wrong way to change the state
  //setText ="new text";  //correct way to change the state
  return (
    <>
      <div
        className="Container" 
        style={{
           color: props.mode === "dark" ? "white" : "#042743" }
           
          }

      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for ="=myBox" class="form-lable">Example textarea </label>*/}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} 
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === 'dark'? 'white':'black'
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div> 

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCleartext}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={lengthanalyze}>
          length analyze
        </button>
      </div>
      <div
        className="Container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>

      {/*  {text.split(" ").length} words and {text.length} characters*/} 

{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters

        </p>
        <p>{0.008 * text.split(/\s+/).filter((word) => word !== "").length} minute read</p>
        <div>
          <strong>Shortest Word:</strong> {shortestWord}
        </div>
        <div>
          <strong>Longest Word:</strong> {longestWord}
        </div>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something above for the preview!!!"}</p>
      </div>
    </>
  );
}
