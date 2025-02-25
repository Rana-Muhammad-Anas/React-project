import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/policy_strategy.jpg";
import Aws from "../Home-Components/Aws";

const Policy = () => {
  const policyBannerData = {
    title: "Harness unparalleled digital policy & strategy",
    description:
      "Empower your business with a winning policy and data strategy.",
    btnName: "Let's Talk",
    bgImage: backImage,
  };
  return (
    <>
      <Banner data={policyBannerData} />
      <Aws />
    </>
  );
};

export default Policy;
