import React from "react";
import { useEffect, useState } from "react";
import { fetchCommentsById } from "../api";
import trash from "../trash.svg";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Alert } from "react-bootstrap";
import { deleteComment } from "../api";

function CommentCard({
  article_id,
  setLoading,
  submit,
  comments,
  setComments,
}) {
  const { user } = useContext(UserContext);
  const [deletedComment, setDeletedComment] = useState(0);
  useEffect(() => {
    setLoading(true);
    fetchCommentsById(article_id).then((res) => {
      setComments(res);

      setLoading(false);
    });
  }, [article_id, deletedComment]);

  const handleDelete = (comment_id) => {
    setLoading(true);
    deleteComment(comment_id).then((res) => {
      setDeletedComment(comment_id);
      setLoading(false);
    });
  };

  return (
    <>
      {comments.map((comment) => {
        return (
          <>
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
                      window.confirm(
                        "Are you sure you wish to delete this item?"
                      )
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
          </>
        );
      })}
    </>
  );
}

export default CommentCard;
