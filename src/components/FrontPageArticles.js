import React from "react";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import NotFound from "./NotFound";

function FrontPageArticles({
  isLoading,
  setLoading,
  fetchArticles,
  setArticles,
  articles,
}) {
  const [searchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const params = {
    sort_by: searchParams.get("sort_by"),
    order: searchParams.get("order"),
  };

  useEffect(() => {
    setLoading(true);
    fetchArticles(params)
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setError(true);
        setLoading(false);
      });
  }, [searchParams]);

  if (error) return <NotFound errorMessage={errorMessage} />;

  if (isLoading) {
    return (
      <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <section>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
}

export default FrontPageArticles;
