import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My favourite Foods.
    </h1>
    <img className="food-img" alt="random img" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
