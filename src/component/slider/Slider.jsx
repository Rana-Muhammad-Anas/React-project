import React from "react";
import Marquee from "react-fast-marquee";
import SliderItems from "./SliderItems";
import imagesData from "./SliderImagesData.json";

const Slider = () => {
  return (
    <>
      <div className="py-5">
        <h2 className="text-center">
          The world's leading brands are powered by NETSOL
        </h2>
        <Marquee speed="70">
          <div className="d-flex justify-content-center">
            {imagesData.map((image) => {
              return <SliderItems key={image.alt} image={image} />;
            })}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Slider;
