import React from "react";

const ThanksPage = ({ value }) => {
  return (
    <div id="thanks">
      <img src="../../assets/clapping_hands.png" alt="clapping hands pic" />
      <p className="rating">You selected {value} out of 5</p>
      <h1>Thanks for your feedback!</h1>
    </div>
  );
};

export default ThanksPage;
