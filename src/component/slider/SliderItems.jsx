import React from "react";

const SliderItems = ({ image }) => {
  return (
    <div>
      <div className="mx-4">
        <img
          style={{
            width: 120,
            height: 120,
          }}
          src={image.src}
          alt={image.alt}
        />
      </div>
    </div>
  );
};

export default SliderItems;
