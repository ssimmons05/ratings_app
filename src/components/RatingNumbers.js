import React from "react";

const RatingNumbers = ({ setValue }) => {
  const numbers = [1, 2, 3, 4, 5];
  const handleOnClick = (e) => {
    setValue(e.target.innerText);
    // e.style.backgroundColor = "green";
  };
  const displayNumbers = numbers.map((number) => {
    return (
      <button
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
