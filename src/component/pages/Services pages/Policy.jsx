import React from "react";
import Banner from "../../Banner";
import Aws from "../Home-Components/Aws";
import { policyBannerData } from "../../BannersData";

const Policy = () => {
  return (
    <>
      <Banner data={policyBannerData} />
      <Aws />
    </>
  );
};

export default Policy;
