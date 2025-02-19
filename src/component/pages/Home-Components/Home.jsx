import React from "react";
import Slider from "../../slider/Slider";
import TranscendHome from "./TranscendHome";
import TranscendConsultancy from "../../TranscendConsultancy";
import Aws from "./Aws";
import SliderImg from "./SliderImg";
import MiniCooper from "./cooperComponent/MiniCooper";
import SubscriptionPart from "../../SubscriptionPart";
import Banner from "../../Banner";

const Home = () => {
  let homeBannerData = {
    title: "Transcend the limits of technology",
    description:
      "From AI-powered finance solutions to innovative cloud services.",
    btnName: "Why NETSOL",
    secBtn: "Let's Talk",
  };
  return (
    <>
      <Banner data={homeBannerData} />
      <Slider />
      <TranscendHome />
      <TranscendConsultancy />
      <Aws />
      <SliderImg />
      <MiniCooper />
      <SubscriptionPart />
    </>
  );
};

export default Home;
