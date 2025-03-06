import React from "react";
import Banner from "../../Banner";
import Aws from "../Home-Components/Aws";
import { AIBannerData } from "../../BannersData";

const AI = () => {
  return (
    <>
      <Banner data={AIBannerData} />
      <Aws />
    </>
  );
};

export default AI;
