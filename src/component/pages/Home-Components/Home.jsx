import React from "react";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "../../slider/Slider";
import TranscendHome from "./TranscendHome";
import MyButton from "../../MyButton";
import TranscendConsultancy from "../../TranscendConsultancy";
import Aws from "./Aws";
import SliderImg from "./SliderImg";
import MiniCooper from "./MiniCooper";
import SubscriptionPart from "../../SubscriptionPart";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column text-center py-5">
        <h1 className="ps-5 display-1 fw-bolder">
          Transcend the <br />
          limits of technology
        </h1>
        <p className="my-3 fs-5">
          From AI-powered finance solutions to innovative cloud services.
        </p>
        <div className="d-flex">
          <MyButton name="Why NETSOL" />
          <Button variant="outline-info sm-font fw-bold">
            Let's Talk
            <FaArrowRight />
          </Button>
        </div>
      </div>
      <Slider />
      <TranscendHome />
      <TranscendConsultancy />
      <Aws />
      <SliderImg />
      <MiniCooper />
      <SubscriptionPart />
    </>
  );
};

export default Home;
