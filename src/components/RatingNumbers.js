import React from "react";

const RatingNumbers = ({ number, handleClickButton }) => {
  const { active, value } = number;

  return (
    <button
      className={active ? "button active" : "button"}
      onClick={() => handleClickButton(value)}
    >
      {value}
    </button>
  );
};

export default RatingNumbers;
