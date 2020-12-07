import React from "react";

export const Info = ({ title, creator, comments }) => {
  return (
    <div className="post__info">
      <h2 className="post__info-title">{title}</h2>
      <p className="post__info-ceator">{creator}</p>
      <p className="post__info-comments">
        {comments} comments | share | save | hide | report
      </p>
    </div>
  );
};
