import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/intermediary_portals.jpg";

const Portals = () => {
  const portalsBannerData = {
    title: "Bespoke portals to reinforce brand identity",
    description:
      "Provide customers with a unified and self-contained purchasing experience.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return <Banner data={portalsBannerData} />;
};

export default Portals;
