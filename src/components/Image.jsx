import React from "react";

export const Image = ({ image }) => {
  return (
    <div className="post__image">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
