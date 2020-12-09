import React, { useState, useEffect } from "react";

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
    home.style.opacity = "0.3";
  }, []);
  return (
    <div className="linkPage">
      <ul>
        {comments
          ? comments.map((comment) => {
              return <li key={comment.data.id}>{comment.data.body}</li>;
            })
          : "Loading..."}
      </ul>
    </div>
  );
};
