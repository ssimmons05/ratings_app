import React, { useState } from "react";
import RatingNumbers from "./RatingNumbers";
import SubmitButton from "./SubmitButton";

const RatingsCard = ({ number }) => {
  const [value, setValue] = useState("");
  const numbers = [
    { num: 1, id: "one" },
    { num: 2, id: "two" },
    { num: 3, id: "three" },
    { num: 4, id: "four" },
    { num: 5, id: "five" },
  ];

  return (
    <div id="card">
      <div id="cardContents">
        <h1>How Did We Do?</h1>
        <p>Please leave us a like</p>

        <div className="container">
          {numbers.map((number) => (
            <RatingNumbers
              key={number}
              number={number}
              setValue={setValue}
              value={value}
            />
          ))}
        </div>

        <SubmitButton value={value} />
      </div>
    </div>
  );
};

export default RatingsCard;
