import React from "react";
import Banner from "../../Banner";
import { informationBannerData } from "../../BannersData";

import Aws from "../Home-Components/Aws";

const Information = () => {
  return (
    <>
      <Banner data={informationBannerData} />
      <Aws />
    </>
  );
};

export default Information;
