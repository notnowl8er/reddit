import React from "react";
import { Image } from "./Image";

export const Media = ({ posts }) => {
  const checkMediaType = (post) => {
    if (post.data.is_self) {
      return <h1>{`Text: ${post.data.url}`}</h1>;
    } else if (post.data.media === null) {
      let checkEnd = post.data.url.split(".");
      let end = checkEnd[checkEnd.length - 1];
      if (end === "gifv") {
        end = "webm";
        let n = checkEnd.join("");
        console.log(n);
        return <h1>Its a fucking gifv</h1>;
      }
      return <Image image={post.data.url} />;
    } else {
      return <h1>{`Video: ${post.data.url}`}</h1>;
    }
  };

  return <div>{checkMediaType(posts)}</div>;
};
