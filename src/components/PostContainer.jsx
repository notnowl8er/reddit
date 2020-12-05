import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { redditAPI } from "../helper/fetchAPI";

export const PostContainer = ({ selected }) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const reddit = redditAPI(selected);
    reddit.then((item) => setPosts(item.splice(1)));
  }, [selected]);

  return (
    <div className="postContainer">
      {posts
        ? posts.map((item) => {
            return (
              <Post
                key={item.data.id}
                score={item.data.score}
                title={item.data.title}
                comments={item.data.num_comments}
                creator={`submitted by ${item.data.author} to r/${item.data.subreddit}`}
                image={item.data.thumbnail}
              />
            );
          })
        : "Loading..."}
    </div>
  );
};
