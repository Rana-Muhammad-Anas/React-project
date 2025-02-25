import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const MyButton = ({ name }) => {
  return (
    <div>
      <Button variant="info" className=" me-3 ms-5">
        <div className="m-1 fw-bold sm-font">
          {name}
          <FaArrowRight className="ms-2" />
        </div>
      </Button>
    </div>
  );
};

export default MyButton;
