import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/automotive_finance.jpg";
import MiniCooper from "../Home-Components/cooperComponent/MiniCooper";

const Automotive = () => {
  const autoBannerData = {
    title: "AI-powered automotive leasing software",
    description:
      "We provide superior technology solutions to the biggest names in the global automotive industry.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={autoBannerData} />
      <MiniCooper />
    </>
  );
};

export default Automotive;
