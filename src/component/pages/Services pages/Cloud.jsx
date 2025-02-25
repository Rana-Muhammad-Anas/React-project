import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/cloud_services.jpg";
import Aws from "../Home-Components/Aws";

const Cloud = () => {
  const cloudBannerData = {
    title: "Scale your business with agile cloud solutions",
    description:
      "Reduce your costs and increase efficiency with multi-cloud networking and security.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={cloudBannerData} />
      <Aws />
    </>
  );
};

export default Cloud;
