import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const MyButton = ({ name }) => {
  return (
    <div>
      <Button variant="info" className="me-3">
        {name}
        <FaArrowRight className="ms-2" />
      </Button>
    </div>
  );
};

export default MyButton;
