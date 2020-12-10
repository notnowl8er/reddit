import React from "react";

export const Comments = ({ comments, posts }) => {
  console.log(posts);
  return (
    <ul>
      {comments
        ? comments
            .filter(
              (comment) =>
                comment.data.replies !== undefined &&
                comment.data.replies !== ""
            )
            .map((comment) => {
              return (
                <li key={comment.data.id} className="comments">
                  <p>{`${comment.data.author} - ${comment.data.score} points`}</p>
                  <p>{comment.data.body}</p>
                  <ul>
                    {comment.data.replies.data.children.map((item) => {
                      return (
                        <li key={item.data.id} className="comments subComment">
                          {item.data.body}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })
        : "Loading..."}
    </ul>
  );
};
