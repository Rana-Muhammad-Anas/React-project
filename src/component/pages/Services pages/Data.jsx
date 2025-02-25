import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/data_engineering.jpg";
import Aws from "../Home-Components/Aws";

const Data = () => {
  const dataBannerData = {
    title: "Robust data engineering services & solutions",
    description:
      "With AWS services for data engineering, build scalable data pipelines for your business growth.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={dataBannerData} />
      <Aws />
    </>
  );
};

export default Data;
