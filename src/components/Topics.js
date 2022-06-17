import React, { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import SortingMenu from "./SortingMenu";

function Topics() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [searchParams] = useSearchParams();

  const params = {
    sort_by: searchParams.get("sort_by"),
    order: searchParams.get("order"),
  };

  const { topic } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic, params).then((articles) => {
      setArticlesByTopic(articles);
    });
  }, [topic, searchParams]);

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
