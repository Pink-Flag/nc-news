import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import FrontPageArticles from "./FrontPageArticles";

import { useSearchParams } from "react-router-dom";

import SortingMenu from "./SortingMenu";
const LandingPage = ({ isLoading, setLoading }) => {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <SortingMenu />
      <FrontPageArticles
        articles={articles}
        setLoading={setLoading}
        isLoading={isLoading}
        setArticles={setArticles}
        fetchArticles={fetchArticles}
      />
    </>
  );
};

export default LandingPage;
