import React, { Fragment } from "react";
import { Button } from "reactstrap";

const Question = props => {
  const { question, handleAnswer, btnId } = props;

  return (
    <Fragment>
      <div className="row justify-content-center mb-3">
        <h1>{question}</h1>
      </div>
      <div className="row">
        <Button
          id={btnId}
          className="col"
          color="primary"
          onClick={event => handleAnswer(event, btnId)}
          value="true"
        >
          Yes
        </Button>
        <Button
          id={btnId}
          className="col"
          color="danger"
          onClick={event => handleAnswer(event, btnId)}
          value="false"
        >
          No
        </Button>
      </div>
    </Fragment>
  );
};

export default Question;
