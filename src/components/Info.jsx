import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LinkPage } from "./LinkPage";

export const Info = ({ title, creator, comments }) => {
  return (
    <div className="post__info">
      <Link to="/link">
        <h2 className="post__info-title">{title}</h2>
      </Link>

      <p className="post__info-ceator">{creator}</p>
      <p className="post__info-comments">
        {comments} comments | share | save | hide | report
      </p>
    </div>
  );
};
