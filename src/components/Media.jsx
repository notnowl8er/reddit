import React from "react";
import { Image } from "./Image";

export const Media = ({ posts }) => {
  const checkMediaType = (post) => {
    if (post.data.is_self) {
      return;
    } else if (
      !post.data.is_self &&
      post.data.media === null &&
      post.data.post_hint !== "image"
    ) {
      return (
        <div>
          <span>Article: </span>
          <a href={post.data.url}>{[post.data.url]}</a>
        </div>
      );
    } else if (post.data.media === null) {
      let checkEnd = post.data.url.split(".");
      let end = checkEnd[checkEnd.length - 1];
      if (end === "gifv") {
        end = "webm";
        let n = checkEnd.join("");
        console.log(n);
        return <h1>Its a fucking gifv</h1>;
      }
      return <img src={post.data.url} alt="" />;
    } else {
      return <h1>{`Video: ${post.data.url}`}</h1>;
    }
  };

  return <div className="link-media">{checkMediaType(posts)}</div>;
};
