import React from "react";
import Banner from "../../Banner";
import { portalsBannerData } from "../../BannersData";
import TitleDiscription from "../../TitleDiscription";
import { portalsTitleData } from "../../TitleDescriptionData";

const Portals = () => {
  return (
    <>
      <Banner data={portalsBannerData} />
      <TitleDiscription data={portalsTitleData} />
    </>
  );
};

export default Portals;
