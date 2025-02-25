import React from "react";
import Slider from "../../slider/Slider";
import TranscendHome from "./TranscendHome";
import TranscendConsultancy from "../../TranscendConsultancy";
import Aws from "./Aws";
import SliderImg from "./SliderImg";
import MiniCooper from "./cooperComponent/MiniCooper";
import VideoBanner from "./VideoBanner";
import backvideo from "../../../../src/assets/Bg-Images/homePageBg.mp4";

const Home = () => {
  let homeBannerData = {
    title: "Transcend the\nlimits of technology",
    description:
      "From AI-powered finance solutions to innovative cloud services.",
    btnName: "Why NETSOL",
    secBtn: "Let's Talk",
    bgVideo: backvideo,
  };
  return (
    <>
      <VideoBanner data={homeBannerData} />
      <Slider />
      <TranscendHome />
      <TranscendConsultancy />
      <Aws />
      <SliderImg />
      <MiniCooper />
    </>
  );
};

export default Home;
