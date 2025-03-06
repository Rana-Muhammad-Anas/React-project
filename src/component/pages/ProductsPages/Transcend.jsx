import React from "react";
import Banner from "../../Banner";
import Slider from "../../slider/Slider";
import MiniCooper from "../Home-Components/cooperComponent/MiniCooper";
import { transcendBannerData } from "../../BannersData";
import TitleDiscription from "../../TitleDiscription";
import { transcendTitleData } from "../../TitleDescriptionData";

const Transcend = () => {
  return (
    <>
      <Banner data={transcendBannerData} />
      <div className="container px-5 border">
        <Slider />
      </div>
      <MiniCooper />
      <TitleDiscription data={transcendTitleData} />
    </>
  );
};

export default Transcend;
