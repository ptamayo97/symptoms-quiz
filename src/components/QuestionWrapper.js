import React from "react";
import Question from "./Question";
import Result from "./ResultWrapper";

const QuestionWrapper = props => {
  const { handleAnswer, quiz } = props;
  const q1 = quiz.q1;
  const q2a = quiz.q2a;
  const q2b = quiz.q2b;

  if (q1.a === "" && q2a.a === "" && q2b.a === "") {
    return (
      <Question
        btnId="q1"
        question={q1.q}
        handleAnswer={handleAnswer}
        {...props}
      />
    );
  } else if (q1.a === "true" && q2a.a === "") {
    return (
      <Question
        btnId="q2a"
        question={q2a.q}
        handleAnswer={handleAnswer}
        {...props}
      />
    );
  } else if (q1.a === "false" && q2b.a === "") {
    return (
      <Question
        btnId="q2b"
        question={q2b.q}
        handleAnswer={handleAnswer}
        {...props}
      />
    );
  } else if (q1.a === "true" && q2a.a === "true") {
    return <Result result={quiz.q2a.result.yes} diagnosis="corona" />;
  } else if (q1.a === "true" && q2a.a === "false") {
    return <Result result={quiz.q2a.result.no} diagnosis="flu" />;
  } else if (q1.a === "false" && q2b.a === "true") {
    return <Result result={quiz.q2b.result.yes} diagnosis="allergies" />;
  } else if (q1.a === "false" && q2b.a === "false") {
    return <Result result={quiz.q2b.result.no} diagnosis="cold" />;
  }
};

export default QuestionWrapper;
