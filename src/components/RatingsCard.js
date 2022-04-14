import React, { useState } from "react";
import RatingNumbers from "./RatingNumbers";
import SubmitButton from "./SubmitButton";

const RatingsCard = () => {
  const [value, setValue] = useState("");

  return (
    <div id="card">
      <div id="cardContents">
        <h1>How Did We Do?</h1>
        <p>Please leave us a like</p>
        <RatingNumbers setValue={setValue} value={value} />
        <SubmitButton value={value} />
      </div>
    </div>
  );
};

export default RatingsCard;
