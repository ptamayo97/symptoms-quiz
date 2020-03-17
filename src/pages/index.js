import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Start = () => {
  return (
    <div>
      <h3>CORONAVIRUS, FLU, COLD, OR ALLERGIES?</h3>
      <Link to="/quiz">
        <Button color="primary">Begin!</Button>
      </Link>
    </div>
  );
};

export default Start;
