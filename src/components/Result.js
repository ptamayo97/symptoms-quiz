import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import FadeIn from "react-fade-in";

const Result = props => {
  const { result } = props;
  return (
    <Fragment>
      <FadeIn>
        <h1>{result.affliction}</h1>
        <h3>Other Symptoms:</h3>
        <ListGroup>
          {result.symptoms.map((item, idx) => (
            <ListGroupItem key={idx}>{item}</ListGroupItem>
          ))}
        </ListGroup>
        <h5>
          These are COMMON SYMPTOMS, which may vary from person to person. Only
          a doctor can give you a diagnosis.
        </h5>
        <Link to="/">
          <Button color="secondary">Restart</Button>
        </Link>
      </FadeIn>
    </Fragment>
  );
};

export default Result;
