import React from "react";
import { Link } from "react-router-dom";

export const Info = ({ title, creator, comments, url, setUrlLink }) => {
  const handleClick = (url) => {
    setUrlLink(url);
  };
  return (
    <div className="post__info">
      <Link
        onClick={() => {
          handleClick(url);
        }}
        to="/link"
      >
        <h2 className="post__info-title">{title}</h2>
      </Link>
      <p className="post__info-ceator">{creator}</p>
      <p className="post__info-comments">
        {comments} comments | share | save | hide | report
      </p>
    </div>
  );
};
