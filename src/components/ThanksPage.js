import React from "react";

const ThanksPage = ({ value }) => {
  return (
    <div id="thanks">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/da/Emoji_u1f44f.svg"
        alt="clapping hands pic"
      />
      <p className="rating">You selected {value} out of 5</p>
      <h1>Thanks for your feedback!</h1>
    </div>
  );
};

export default ThanksPage;
