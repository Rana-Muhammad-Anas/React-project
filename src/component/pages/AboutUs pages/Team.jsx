import React from "react";
import Banner from "../../Banner";
import backImage from "../../../../src/assets/Bg-Images/management-team.jpg";

const Team = () => {
  const teamData = {
    title: "Management Team",
    bgImage: backImage,
  };
  return <Banner data={teamData} />;
};

export default Team;
