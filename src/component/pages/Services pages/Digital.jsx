import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/Digital.png";
import Aws from "../Home-Components/Aws";

const Digital = () => {
  const digitalBannerData = {
    title: "Empowering your digital future",
    description:
      "Fuel your success through strategic talent partnership services and next-gen digital solutions.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={digitalBannerData} />
      <Aws />
    </>
  );
};

export default Digital;
