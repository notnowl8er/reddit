import React from "react";

export const Post = ({ title, score, comments, creator }) => {
  return (
    <div className="post">
      <div className="post__score">
        <i className="fas fa-caret-up"></i>
        <p className="score">{score}</p>
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="post__image">
        <div className="img-container"></div>
      </div>
      <div className="post__info">
        <h2 className="post__info-title">{title}</h2>
        <p className="post__info-ceator">{creator}</p>
        <p className="post__info-comments">
          {comments} comments | share | save | hide | report
        </p>
      </div>
    </div>
  );
};
