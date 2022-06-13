import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

const LandingPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      console.log(articles);
      setArticles(articles);
    });
  }, []);

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
