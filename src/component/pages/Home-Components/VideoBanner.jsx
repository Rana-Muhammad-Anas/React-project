import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import MyButton from "../../MyButton";

const VideoBanner = ({ data }) => {
  const { title, description, btnName, secBtn, bgVideo } = data;

  return (
    <>
      <div className="videowrap">
        <video src={bgVideo} loop autoPlay muted id="bg-video"></video>
        <div className="d-flex justify-content-center align-items-center flex-column text-center content ">
          <h1 className="ps-5 display-1 fw-bolder text-white">{title}</h1>
          <p className="my-3 fs-5 text-white">{description}</p>
          <div className="d-flex">
            <MyButton name={btnName} />
            <Button variant="outline-info sm-font text-white fw-bold">
              {secBtn} <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
