import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import FadeIn from "react-fade-in";

const Start = () => {
  return (
    <div>
      <FadeIn>
        <h3>CORONAVIRUS, FLU, COLD, OR ALLERGIES?</h3>
        <Link to="/quiz">
          <Button color="primary">Begin!</Button>
        </Link>
      </FadeIn>
    </div>
  );
};

export default Start;
