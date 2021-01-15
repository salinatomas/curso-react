import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return (
    <div className="PageError">
      <h3>
        <span role="img" aria-label="Cross Emoji">
          ❌
        </span>
        {props.error}
        <span role="img" aria-label="Cross Emoji">
          ❌
        </span>
      </h3>
    </div>
  );
}

export default PageError;
