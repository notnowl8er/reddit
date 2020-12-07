import React from "react";
import { Image } from "./Image";
import { Info } from "./Info";
import { Score } from "./Score";

export const Post = ({ title, score, comments, creator, image, setImage }) => {
  return (
    <div className="post">
      <Score score={score} />
      <Image image={image} setImage={setImage} />
      <Info title={title} creator={creator} comments={comments} />
    </div>
  );
};
