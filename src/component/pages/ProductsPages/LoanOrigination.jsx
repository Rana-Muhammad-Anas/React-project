import React from "react";
import Banner from "../../Banner";
import { loanBannerData } from "../../BannersData";
import TitleDiscription from "../../TitleDiscription";
import { originationTitleData } from "../../TitleDescriptionData";

const Loan = () => {
  return (
    <>
      <Banner data={loanBannerData} />
      <TitleDiscription data={originationTitleData} />
    </>
  );
};

export default Loan;
