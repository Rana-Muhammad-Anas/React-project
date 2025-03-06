import React from "react";
import Slider from "../../slider/Slider";
import TranscendHome from "./TranscendHome";
import TranscendConsultancy from "../../TranscendConsultancy";
import Aws from "./Aws";
import SliderImg from "./SliderImg";
import MiniCooper from "./cooperComponent/MiniCooper";
import VideoBanner from "./VideoBanner";
import { homeBannerData } from "../../BannersData";

const Home = () => {
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
