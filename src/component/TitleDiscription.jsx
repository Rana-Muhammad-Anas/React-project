import React from "react";
import MyButton from "./MyButton";

const TitleDiscription = ({ data }) => {
  const { heading, paragraph } = data;
  return (
    <div className="container-fluid title-bg text-center py-5 px-5">
      <h1 className="">{heading}</h1>
      <p className="fs-5">{paragraph}</p>
      <MyButton name={"Connect With Us "} />
    </div>
  );
};

export default TitleDiscription;
