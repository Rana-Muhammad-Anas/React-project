import React from "react";
import Banner from "../../Banner";
import Aws from "../Home-Components/Aws";
import { dataBannerData } from "../../BannersData";

const Data = () => {
  return (
    <>
      <Banner data={dataBannerData} />
      <Aws />
    </>
  );
};

export default Data;
