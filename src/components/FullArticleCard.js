import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { fetchArticleById, fetchCommentsById, patchVotes } from "../api";
import Spinner from "react-bootstrap/Spinner";
import VoteDisplay from "./VoteDisplay";

function FullArticleCard({ isLoading, setLoading }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [articleVotes, setArticleVotes] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
      setArticleVotes(article.votes);
      setLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    setLoading(true);
    fetchCommentsById(article_id).then((comments) => {
      setComments(comments);

      setLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (
      <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <p className="articleInfo">
        posted by {article.author} in {article.topic} on{" "}
        {article.created_at ? article.created_at.split("T")[0] : null}
      </p>
      <h2>{article.title}</h2>
      <div>{article.body}</div>
      <div className="commentLink">{article.comments} comments</div>
      <VoteDisplay
        setArticleVotes={setArticleVotes}
        articleVotes={articleVotes}
        article_id={article_id}
        patchVotes={patchVotes}
      />
      <ul>
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
}

export default FullArticleCard;
