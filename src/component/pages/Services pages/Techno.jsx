import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/emerging-technology.jpg";
import Aws from "../Home-Components/Aws";

const Techno = () => {
  const technoBannerData = {
    title: "Experience Web 3.0 & emerging technologies",
    description:
      "Empowering the future with advanced Web 3.0 services and emerging technologies.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={technoBannerData} />
      <Aws />
    </>
  );
};

export default Techno;
