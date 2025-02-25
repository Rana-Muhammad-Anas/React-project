import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/mobility_solutions.jpg";

const Mobility = () => {
  const financeData = {
    title: "A user-centric retail experience",
    description:
      "An omni-channel purchasing journey that transcends the limitations of the traditional customer experience.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return <Banner data={financeData} />;
};

export default Mobility;
