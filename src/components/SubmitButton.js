import React, { useState } from "react";
import ThanksPage from "./ThanksPage";

const SubmitButton = ({ value }) => {
  const [state, setState] = useState(false);

  return (
    <div className="submit">
      <button
        onClick={() => {
          setState(!state);
        }}
        type="button"
      >
        Submit
      </button>
      {value && state ? <ThanksPage value={value} /> : null};
    </div>
  );
};

export default SubmitButton;
