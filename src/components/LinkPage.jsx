import React, { useState, useEffect } from "react";
import { Comments } from "./Comments";
import { Post } from "./Post";

export const LinkPage = ({ urlLink }) => {
  const [comments, setComments] = useState([]);
  const fetchAPI = async (link) => {
    const fetchReddit = await fetch(`https://www.reddit.com${link}.json`);
    const reddit = await fetchReddit.json();
    setComments(reddit[1].data.children);
  };
  useEffect(() => {
    fetchAPI(urlLink);
    const home = document.getElementById("home");
    //home.style.opacity = "0.2";
  }, []);
  return (
    <div className="linkPage">
      <div className="linkPage-close">
        <ul>
          <li>
            <i className="fas fa-times"></i>
          </li>
          <li className="selected">comments</li>
        </ul>
      </div>
      <div className="linkPage-post"></div>
      <div className="linkPage-content"></div>
      <div className="linkPage-comments">
        <Comments comments={comments} />
      </div>
    </div>
  );
};
