import React, { useState } from "react";
import RatingNumbers from "./RatingNumbers";
import SubmitButton from "./SubmitButton";

const RatingsCard = () => {
  const [rating, setRating] = useState("");
  const [numbers, setNumbers] = useState([
    { value: 1, active: false },
    { value: 2, active: false },
    { value: 3, active: false },
    { value: 4, active: false },
    { value: 5, active: false },
  ]);

  const handleClickButton = (value) => {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].active) {
        numbers[i].active = false;
      }
      if (numbers[i].value === value) {
        numbers[i].active = true;
      }
    }
    setRating(value);
    setNumbers(numbers);
  };

  return (
    <div id="card">
      <div id="cardContents">
        <h1>How Did We Do?</h1>
        <p>Please leave us a like</p>

        <div className="container">
          {numbers.map((number) => (
            <RatingNumbers
              key={number.value}
              number={number}
              handleClickButton={handleClickButton}
            />
          ))}
        </div>

        <SubmitButton value={rating} />
      </div>
    </div>
  );
};

export default RatingsCard;
