import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/Why Netsol.jpg";
const Netsol = () => {
  const whyNetsolData = {
    title: "Explore the world of NETSOL Technologies",
    description:
      "With strategically located centers worldwide, we futureproof operations for financial institutions globally.",
    bgImage: backImage,
  };
  return <Banner data={whyNetsolData} />;
};

export default Netsol;
