import React from "react";
import MyButton from "./MyButton";

const Banner = ({ data }) => {
  const { title, description, btnName, bgImage } = data;

  return (
    <>
      <div
        className="d-flex justify-content-center flex-column py-5"
        style={{
          background: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1 className="ps-5 fw-bolder text-white">{title}</h1>
        <p className="my-3 ps-5  text-white">{description}</p>
        {btnName && <MyButton name={btnName} />}
      </div>
    </>
  );
};

export default Banner;
