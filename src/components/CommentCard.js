import React from "react";
import { useEffect, useState } from "react";
import { fetchCommentsById } from "../api";
import trash from "../trash.svg";

import { deleteComment } from "../api";

function CommentCard({
  article_id,
  setLoading,
  submit,
  comments,
  setComments,
}) {
  const [deletedComment, setDeletedComment] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchCommentsById(article_id).then((res) => {
      setComments(res);

      setLoading(false);
    });
  }, [article_id, deletedComment, submit]);

  const handleDelete = (comment_id) => {
    setLoading(true);
    deleteComment(comment_id).then((res) => {
      setDeletedComment(deletedComment + 1);
      setLoading(false);
    });
  };

  const sortedComments = [...comments].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <>
      {deletedComment ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          comment deleted!
          <button
            type="button"
            className="close"
            onClick={() => setDeletedComment(0)}
            // data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : null}
      {sortedComments.map((comment) => {
        return (
          <div className="CommentCard" key={comment.comment_id}>
            <div className="articleInfo">
              by {comment.author} on{" "}
              {comment.created_at ? comment.created_at.split("T")[0] : null}
            </div>
            <div>{comment.body}</div>
            {comment.author === "Jess Jelly" ? (
              <img
                src={trash}
                alt="delete post"
                className="deleteIcon"
                onClick={() => {
                  if (
                    window.confirm("Are you sure you wish to delete this item?")
                  )
                    handleDelete(comment.comment_id);
                }}
              />
            ) : null}
            {comment.votes === 1 ? (
              <div>⬆️⬇️ {comment.votes} vote</div>
            ) : (
              <div>⬆️⬇️ {comment.votes} votes</div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default CommentCard;
