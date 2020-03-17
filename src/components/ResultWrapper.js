import React from "react";
import Result from "./Result";

const ResultWrapper = props => {
  const { diagnosis, result } = props;
  if (diagnosis === "corona") {
    return <Result result={result} />;
  } else if (diagnosis === "flu") {
    return <Result result={result} />;
  } else if (diagnosis === "allergies") {
    return <Result result={result} />;
  } else if (diagnosis === "cold") {
    return <Result result={result} />;
  }
};

export default ResultWrapper;
