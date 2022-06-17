import React, { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import SortingMenu from "./SortingMenu";
import NotFound from "./NotFound";

function Topics() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [searchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const params = {
    sort_by: searchParams.get("sort_by"),
    order: searchParams.get("order"),
  };

  const { topic } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic, params)
      .then((articles) => {
        setArticlesByTopic(articles);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setError(true);
      });
  }, [topic, searchParams]);

  if (error) return <NotFound errorMessage={errorMessage} />;

  return (
    <>
      <SortingMenu />
      <section>
        <ul>
          {articlesByTopic.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </section>
    </>
  );
}

export default Topics;
