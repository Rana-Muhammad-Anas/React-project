import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/whole_sale_finance.jpg";

const Finance = () => {
  const financeData = {
    title: "Master wholesale finance operations with AI",
    description:
      "Gain a competitive edge by automating your wholesale finance and floor planning operations effortlessly.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return <Banner data={financeData} />;
};

export default Finance;
