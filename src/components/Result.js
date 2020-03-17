import React from "react";

const Result = props => {
  const { diagnosis, result } = props;
  if (diagnosis === "corona") {
    return (
      <div>
        <h1>{result.affliction}</h1>
      </div>
    );
  } else if (diagnosis === "flu") {
    return (
      <div>
        <h1>{result.affliction}</h1>
      </div>
    );
  } else if (diagnosis === "allergies") {
    return (
      <div>
        <h1>{result.affliction}</h1>
      </div>
    );
  } else if (diagnosis === "cold") {
    return (
      <div>
        <h1>{result.affliction}</h1>
      </div>
    );
  }
};

export default Result;
