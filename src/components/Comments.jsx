import React from "react";

export const Comments = ({ comments }) => {
  return (
    <ul>
      {comments
        ? comments
            .filter((comment) => comment.data.replies !== undefined)
            .map((comment) => {
              return (
                <details>
                  <summary>
                    <li className="comments" key={comment.data.id}>
                      <h6>{`${comment.data.author} - ${comment.data.score} points`}</h6>
                      <h6>{comment.data.body}</h6>
                    </li>
                  </summary>
                  <dt>1</dt>
                </details>
              );
            })
        : "Loading..."}
    </ul>
  );
};
