import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/loan_origination.jpg";

const Loan = () => {
  const loanBannerData = {
    title: "An AI-powered loan origination experience",
    description:
      "Experience the future of lease and loan origination with highly agile, easy-to-use, cross-channel platforms.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return <Banner data={loanBannerData} />;
};

export default Loan;
