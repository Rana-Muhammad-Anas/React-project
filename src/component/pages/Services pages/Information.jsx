import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/information_security.jpg";
import Aws from "../Home-Components/Aws";

const Information = () => {
  const informationBannerData = {
    title: "Advanced information security services",
    description:
      "Securing your digital world with AI-powered threat-ready technology.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={informationBannerData} />
      <Aws />
    </>
  );
};

export default Information;
