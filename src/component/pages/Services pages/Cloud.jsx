import React from "react";
import Banner from "../../Banner";
import Aws from "../Home-Components/Aws";
import { cloudBannerData } from "../../BannersData";

const Cloud = () => {
  return (
    <>
      <Banner data={cloudBannerData} />
      <Aws />
    </>
  );
};

export default Cloud;
