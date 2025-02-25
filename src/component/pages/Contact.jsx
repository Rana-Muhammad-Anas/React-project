import React from "react";
import Banner from "../Banner";
import backImage from "../../../src/assets/Bg-Images/board-of-directors.jpg";

const Contact = () => {
  const contactBannerData = {
    title: "Connect with us",
    description:
      "Complete the form to schedule a demo or ask questions about the ways we can support your business goals.",
    bgImage: backImage,
  };
  return <Banner data={contactBannerData} />;
};

export default Contact;
