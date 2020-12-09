import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { redditAPI } from "../helper/fetchAPI";
import { ImageModule } from "./ImageModule";

export const PostContainer = ({ selected, sort, setUrlLink }) => {
  const [posts, setPosts] = useState();
  const [image, setImage] = useState("");
  useEffect(() => {
    const reddit = redditAPI(selected, sort);
    reddit.then((item) => setPosts(item.splice(1)));
  }, [selected, sort]);

  return (
    <div className="postContainer">
      {posts ? (
        posts.map((item) => {
          return (
            <Post
              key={item.data.id}
              score={item.data.score}
              title={item.data.title}
              comments={item.data.num_comments}
              creator={`submitted by ${item.data.author} to r/${item.data.subreddit}`}
              image={item.data.thumbnail}
              url={item.data.permalink}
              setImage={setImage}
              setUrlLink={setUrlLink}
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
      <ImageModule image={image} />
    </div>
  );
};
