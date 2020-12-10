import React from "react";
import { Image } from "./Image";
import { Info } from "./Info";
import { Score } from "./Score";

export const Post = ({
  title,
  score,
  comments,
  creator,
  image,
  setImage,
  url,
  setUrlLink,
  posts,
}) => {
  return (
    <div className="post">
      <Score score={score} />
      <Image image={image} setImage={setImage} />
      <Info
        title={title}
        creator={creator}
        comments={comments}
        url={url}
        setUrlLink={setUrlLink}
        posts={posts}
      />
    </div>
  );
};
