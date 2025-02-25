import React from "react";
import Banner from "../../Banner";
import Slider from "../../slider/Slider";
import SubscriptionPart from "../../SubscriptionPart";
import MiniCooper from "../Home-Components/cooperComponent/MiniCooper";
import backImage from "../../../../src/assets/Bg-Images/our_platform.jpg";

const Transcend = () => {
  const transcendBannerData = {
    title: "Transcend the limits of technology",
    description:
      "From AI-powered finance solutions to seamless digital retail.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={transcendBannerData} />
      <div className="container px-5 border">
        <Slider />
      </div>
      <MiniCooper />
    </>
  );
};

export default Transcend;
