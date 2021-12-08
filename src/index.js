import React from "react";
import ReactDOM from "react-dom";
// const img = "https://picsum.photos/200";

const date = new Date();
const currentTime = date.getHours();

let greeting = "";
const customStyle = {
  color: ""
};
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good Night";
  customStyle.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
