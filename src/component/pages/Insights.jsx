import React from "react";
import Banner from "../Banner";
import backImage from "../../../src/assets/Bg-Images/insight.jpg";

const Insights = () => {
  const insightBannerData = {
    title: "Resource Center",
    description:
      "Explore expert insights and resources on the asset finance industry and the latest in technology in our comprehensive content hub",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return <Banner data={insightBannerData} />;
};

export default Insights;
