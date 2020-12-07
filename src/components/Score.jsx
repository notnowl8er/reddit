import React from "react";

export const Score = ({ score }) => {
  return (
    <div className="post__score">
      <i className="fas fa-caret-up"></i>
      <p className="score">{score}</p>
      <i className="fas fa-caret-down"></i>
    </div>
  );
};
