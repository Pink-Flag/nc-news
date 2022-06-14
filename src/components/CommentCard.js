import React from "react";

function CommentCard({ comment }) {
  return (
    <div className="CommentCard">
      <div className="articleInfo">
        by {comment.author} on{" "}
        {comment.created_at ? comment.created_at.split("T")[0] : null}
      </div>
      <div>{comment.body}</div>
      <div>⬆️⬇️ {comment.votes} votes</div>
    </div>
  );
}

export default CommentCard;
