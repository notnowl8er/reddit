import React from "react";
import { Image } from "./Image";
import { Info } from "./Info";
import { Score } from "./Score";

export const Post = ({ title, score, comments, creator, image }) => {
  return (
    <div className="post">
      <Score score={score} />
      <Image image={image} />
      <Info title={title} creator={creator} comments={comments} />
    </div>
  );
};
