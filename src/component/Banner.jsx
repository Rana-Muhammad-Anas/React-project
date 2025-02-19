import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import MyButton from "./MyButton";
import { Button } from "react-bootstrap";

const Banner = ({ data }) => {
  const { title, description, btnName, secBtn } = data;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column text-center py-5">
        <h1 className="ps-5 display-1 fw-bolder">{title}</h1>
        <p className="my-3 fs-5">{description}</p>
        <div className="d-flex">
          <MyButton name={btnName} />
          <Button variant="outline-info sm-font fw-bold">
            {secBtn} <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
