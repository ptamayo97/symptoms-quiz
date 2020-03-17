import React, { Fragment } from "react";
import { Button } from "reactstrap";
import FadeIn from "react-fade-in";

const Question = props => {
  const { question, handleAnswer, btnId } = props;

  return (
    <Fragment>
      <FadeIn>
        <div className="row justify-content-center mb-3">
          <h1>{question}</h1>
        </div>
        <div className="row">
          <Button
            id={btnId}
            className="col"
            color="success"
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
      </FadeIn>
    </Fragment>
  );
};

export default Question;
