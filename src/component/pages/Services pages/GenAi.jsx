import React from "react";
import Banner from "../../Banner";
import Aws from "../Home-Components/Aws";
import { genAIBannerData } from "../../BannersData";

const GenAi = () => {
  return (
    <>
      <Banner data={genAIBannerData} />
      <Aws />
    </>
  );
};

export default GenAi;
