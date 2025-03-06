import React from "react";
import Banner from "../../Banner";
import Aws from "../Home-Components/Aws";
import { technoBannerData } from "../../BannersData";

const Techno = () => {
  return (
    <>
      <Banner data={technoBannerData} />
      <Aws />
    </>
  );
};

export default Techno;
