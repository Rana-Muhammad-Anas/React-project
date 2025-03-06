import React from "react";
import Banner from "../../Banner";
import Aws from "../Home-Components/Aws";
import { digitalBannerData } from "../../BannersData";

const Digital = () => {
  return (
    <>
      <Banner data={digitalBannerData} />
      <Aws />
    </>
  );
};

export default Digital;
