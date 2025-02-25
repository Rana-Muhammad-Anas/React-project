import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/equipment_finance.jpg";

const Equipment = () => {
  const autoBannerData = {
    title: "AI-powered equipment leasing software",
    description:
      "We provide equipment finance solutions to companies with ever-growing business requirements worldwide.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return <Banner data={autoBannerData} />;
};

export default Equipment;
