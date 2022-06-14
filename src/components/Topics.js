import React, { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

function Topics() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic).then((articles) => {
      setArticlesByTopic(articles);
    });
  }, [topic]);

  return (
    <section>
      <ul>
        {articlesByTopic.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
}

export default Topics;
