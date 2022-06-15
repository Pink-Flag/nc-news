import React from "react";
import { useEffect, useState } from "react";
import { fetchCommentsById } from "../api";

function CommentCard({ article_id, isLoading, setLoading }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCommentsById(article_id).then((res) => {
      setComments(res);

      setLoading(false);
    });
  }, [article_id]);

  return (
    <>
      {comments.map((comment) => {
        return (
          <div className="CommentCard" key={comment.comment_id}>
            <div className="articleInfo">
              by {comment.author} on{" "}
              {comment.created_at ? comment.created_at.split("T")[0] : null}
            </div>
            <div>{comment.body}</div>
            <div>⬆️⬇️ {comment.votes} votes</div>
          </div>
        );
      })}
    </>
  );
}

export default CommentCard;
