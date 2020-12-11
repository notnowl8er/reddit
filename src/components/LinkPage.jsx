import React, { useState, useEffect } from "react";
import { Comments } from "./Comments";
import { Media } from "./Media";
import { Post } from "./Post";

export const LinkPage = ({ urlLink }) => {
  console.log(urlLink.url);
  const [comments, setComments] = useState([]);
  const fetchAPI = async (link) => {
    const fetchReddit = await fetch(`https://www.reddit.com${link}.json`);
    const reddit = await fetchReddit.json();
    setComments(reddit[1].data.children);
  };
  useEffect(() => {
    fetchAPI(urlLink.url);
    //const home = document.getElementById("home");
    //home.style.opacity = "0.2";
  }, []);
  return (
    <div className="linkPage">
      <div className="linkPage-close">
        <ul>
          <li>
            <i className="fas fa-times"></i>
          </li>
        </ul>
      </div>
      <div className="linkPage-post">
        <Post
          key={urlLink.posts.data.id}
          score={urlLink.posts.data.score}
          title={urlLink.posts.data.title}
          comments={urlLink.posts.data.num_comments}
          creator={`submitted by ${urlLink.posts.data.author} to r/${urlLink.posts.data.subreddit}`}
          image={urlLink.posts.data.thumbnail}
          url={urlLink.posts.data.permalink}
          posts={urlLink.posts}
        />
      </div>
      <div className="linkPage-content">
        <Media posts={urlLink.posts} />
      </div>
      <div className="linkPage-comments">
        <Comments comments={comments} posts={urlLink.posts} />
      </div>
    </div>
  );
};
