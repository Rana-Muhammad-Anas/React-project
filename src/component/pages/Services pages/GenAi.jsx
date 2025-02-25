import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/generative_ai.jpg";
import Aws from "../Home-Components/Aws";

const GenAi = () => {
  const genBannerData = {
    title: "Unleash the power: Generative AI solutions",
    description:
      "Innovate beyond limits by transforming your business landscape with AI creativity.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={genBannerData} />
      <Aws />
    </>
  );
};

export default GenAi;
