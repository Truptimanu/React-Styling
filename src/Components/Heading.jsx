import React from "react";

function Heading() {
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

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}
export default Heading;
