import React from "react";

export const Comments = ({ comments, posts }) => {
  console.log(posts);
  return (
    <ul className="link-comm">
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
                  <div className="comment-container">
                    <div className="vote">
                      <i className="fas fa-caret-up"></i>
                      <i className="fas fa-caret-down"></i>
                    </div>
                    <div className="comment">
                      {/* <div className="line2"></div> */}
                      <p>{`${comment.data.author} - ${comment.data.score} points`}</p>
                      <p>{comment.data.body}</p>
                      <p>permalink | embed | save | report | reply</p>
                    </div>
                  </div>

                  <ul>
                    {comment.data.replies.data.children.map((item) => {
                      return (
                        <li key={item.data.id} className="comments subComment">
                          <div className="comment-container">
                            <div className="line"></div>
                            <div className="vote">
                              <i className="fas fa-caret-up"></i>
                              <i className="fas fa-caret-down"></i>
                            </div>
                            <div className="comment">
                              <p>{`${item.data.author} - ${item.data.score} points`}</p>
                              <p>{`${item.data.body}`}</p>
                              <p>permalink | embed | save | report | reply</p>
                            </div>
                          </div>
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
