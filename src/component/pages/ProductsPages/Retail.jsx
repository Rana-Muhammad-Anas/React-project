import React from "react";
import Banner from "../../Banner";
import { retailBannerData } from "../../BannersData";
import { retailTitleData } from "../../TitleDescriptionData";
import TitleDiscription from "../../TitleDiscription";

const Retail = () => {
  return (
    <>
      <Banner data={retailBannerData} />
      <TitleDiscription data={retailTitleData} />
    </>
  );
};

export default Retail;
