import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { patchVotes } from "../api";

import VoteDisplay from "./VoteDisplay";
import FullArticleCard from "./FullArticleCard";

function SingleArticlePage({ isLoading, setLoading }) {
  const { article_id } = useParams();
  const [articleVotes, setArticleVotes] = useState(0);

  return (
    <>
      <FullArticleCard
        article_id={article_id}
        setArticleVotes={setArticleVotes}
        isLoading={isLoading}
        setLoading={setLoading}
      />
      <VoteDisplay
        setArticleVotes={setArticleVotes}
        articleVotes={articleVotes}
        article_id={article_id}
        patchVotes={patchVotes}
      />
      <CommentCard
        article_id={article_id}
        isLoading={isLoading}
        setLoading={setLoading}
      />
    </>
  );
}

export default SingleArticlePage;
