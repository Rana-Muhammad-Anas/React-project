import React from "react";
import Banner from "../../Banner";
import { serviceBannerData } from "../../BannersData";
import TitleDiscription from "../../TitleDiscription";
import { serviceTitleData } from "../../TitleDescriptionData";

const Service = () => {
  return (
    <>
      <Banner data={serviceBannerData} />
      <TitleDiscription data={serviceTitleData} />
    </>
  );
};

export default Service;
