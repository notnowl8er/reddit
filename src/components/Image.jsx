import React from "react";

export const Image = ({ image, setImage }) => {
  const handleImage = (image) => {
    setImage(image);
  };
  return (
    <div className="post__image">
      <div className="img-container">
        <img onClick={() => handleImage(image)} src={image} alt="" />
      </div>
    </div>
  );
};
