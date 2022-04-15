import React, { useState } from "react";

const RatingNumbers = ({ setValue, value, number }) => {
  const [color, setColors] = useState("");
  const [active, setActive] = useState(false);

  const handleClickButton = ({ number }) => {
    setActive(true);
    setColors(number.id);
    setValue(number.num);
    if (active) {
      setActive(false);
      setColors("");
      setValue(null);
    } else {
      setActive(true);
      setColors(number.id);
    }
  };

  return (
    <button
      className={`button ${color}`}
      onClick={() => handleClickButton({ number })}
    >
      {number.num}
    </button>
  );
};

export default RatingNumbers;
