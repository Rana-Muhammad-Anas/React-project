import React from "react";
import Banner from "../Banner";
import backImage from "../../../src/assets/Bg-Images/marketplace.jpg";

const Marketplace = () => {
  const marketplaceBannerData = {
    title: "Connect, configure & innovate",
    description:
      "From originations to servicing, experience the most intuitive finance and leasing products in asset finance.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return <Banner data={marketplaceBannerData} />;
};

export default Marketplace;
