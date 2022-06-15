import React from "react";
import { useContext } from "react";
import { postComment } from "../api";
import { useState } from "react";
import UserContext from "../context/UserContext";

function CommentForm({ article_id, setSubmit, submit, comments, setComments }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [newComment, setNewComment] = useState(false);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    const commentObj = {
      author: "Jess Jelly",
      comment_id: Math.round(new Date().getTime() / 1000000000),
      votes: 0,
      body: comment,
      created_at: new Date().toISOString(),
      username: user,
    };

    postComment(article_id, commentObj)
      .then((comment) => {
        setSubmit(false);
        setComment("");
        setNewComment(true);
        setComments((comments) => [commentObj, ...comments]);
      })
      .then(() => {
        setTimeout(() => {
          setNewComment(false);
        }, 3000);
      })
      .catch((err) => {
        alert(
          "something has gone wrong, please try posting your comment again!"
        );
      });
  };

  return (
    <form onSubmit={handleCommentSubmit} className="commentForm">
      <div>
        <input
          type="text"
          className="usernameInput"
          placeholder="write a comment..."
          onChange={(event) => setComment(event.target.value)}
          value={comment}
          required
        ></input>
      </div>
      {submit ? (
        <input type="submit" value="Submit" disabled />
      ) : newComment ? (
        <input type="submit" value="Comment posted!" />
      ) : (
        <input type="submit" value="Submit" />
      )}
    </form>
  );
}

export default CommentForm;
