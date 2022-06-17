import { fetchArticles } from "../api";
import { useState } from "react";

import FrontPageArticles from "./FrontPageArticles";

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
