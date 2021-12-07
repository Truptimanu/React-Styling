import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle} className="heading" contentEditable="true">
      My favourite Foods.
    </h1>
    <img className="food-img" alt="random img" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
