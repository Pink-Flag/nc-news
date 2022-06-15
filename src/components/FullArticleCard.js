import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchArticleById } from "../api";
import Spinner from "react-bootstrap/Spinner";

function FullArticleCard({ isLoading, setLoading, setArticleVotes }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
      setArticleVotes(article.votes);
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
    </>
  );
}

export default FullArticleCard;
