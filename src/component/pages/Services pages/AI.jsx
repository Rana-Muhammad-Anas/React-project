import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/ai_ml.jpg";
import Aws from "../Home-Components/Aws";

const AI = () => {
  const AIBannerData = {
    title: "Unlock the power of your data with AI & ML services",
    description:
      "Transforming your data into valuable insights leveraging AI for data analytics.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={AIBannerData} />
      <Aws />
    </>
  );
};

export default AI;
