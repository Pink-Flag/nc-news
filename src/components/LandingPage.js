import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { Spinner } from "react-bootstrap";
const LandingPage = ({ isLoading, setLoading }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArticles().then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

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
};

export default LandingPage;
