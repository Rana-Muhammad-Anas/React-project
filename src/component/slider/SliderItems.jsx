import React from "react";

const SliderItems = ({ image }) => {
  return (
    <div>
      <div className="mx-4">
        <img
          style={{
            width: 140,
            height: 140,
          }}
          src={image.src}
          alt={image.alt}
        />
      </div>
    </div>
  );
};

export default SliderItems;
