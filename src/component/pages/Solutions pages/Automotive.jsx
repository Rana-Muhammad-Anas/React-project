import React from "react";
import Banner from "../../Banner";
import MiniCooper from "../Home-Components/cooperComponent/MiniCooper";
import { autoBannerData } from "../../BannersData";

const Automotive = () => {
  return (
    <>
      <Banner data={autoBannerData} />
      <MiniCooper />
    </>
  );
};

export default Automotive;
