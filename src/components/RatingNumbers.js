import React, { useState } from "react";

const RatingNumbers = ({ setValue, value }) => {
  // const [color, setColor] = useState("gray");
  const numbers = [1, 2, 3, 4, 5];
  const handleOnClick = (e) => {
    setValue(e.target.innerText);
    // if (value) {
    //   setColor("green");
    // }
    // document.querySelector(".numbers").style.background = "green";
  };
  const displayNumbers = numbers.map((number, index) => {
    return (
      <button
        id={index}
        key={index}
        onClick={(e) => {
          handleOnClick(e);
        }}
        className="numbers"
      >
        {number}
      </button>
    );
  });
  return <div>{displayNumbers}</div>;
};

export default RatingNumbers;
