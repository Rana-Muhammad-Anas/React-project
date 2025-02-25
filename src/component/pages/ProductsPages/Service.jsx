import React from "react";
import backImage from "../../../../src/assets/Bg-Images/financial_services.jpg";
import Banner from "../../Banner";

const Service = () => {
  const serviceBannerData = {
    title: "Next-gen loan & lease servicing software",
    description:
      "NETSOL Technologies offers next-generation solutions designed to streamline loan and lease management and servicing. Our AI-powered lease contract management software provides a comprehensive suite of features to enhance operational efficiency and customer satisfaction.",
    btnName: "Connect With Us",
    bgImage: backImage,
  };
  return (
    <div>
      <Banner data={serviceBannerData} />
    </div>
  );
};

export default Service;
