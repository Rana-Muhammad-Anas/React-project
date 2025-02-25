import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/board-of-directors.jpg";

const Directors = () => {
  const directorsData = {
    title: "Board Of Directors",
    bgImage: backImage,
  };
  return <Banner data={directorsData} />;
};
export default Directors;
