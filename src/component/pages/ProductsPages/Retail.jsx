import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/digital_retail.jpg";

const Retail = () => {
  const retailBannerData = {
    title: "Experience the future of digital retail, today",
    description:
      "Unleash sales growth with omni-channel transformation and AI-powered precision.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return <Banner data={retailBannerData} />;
};

export default Retail;
