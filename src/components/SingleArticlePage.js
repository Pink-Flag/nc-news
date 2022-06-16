import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { patchVotes } from "../api";
import CommentForm from "./CommentForm";

import VoteDisplay from "./VoteDisplay";
import FullArticleCard from "./FullArticleCard";

function SingleArticlePage({ isLoading, setLoading }) {
  const { article_id } = useParams();
  const [articleVotes, setArticleVotes] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [comments, setComments] = useState([]);

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
      <CommentForm
        article_id={article_id}
        submit={submit}
        setSubmit={setSubmit}
        setComments={setComments}
        comments={comments}
      />
      <CommentCard
        article_id={article_id}
        isLoading={isLoading}
        setLoading={setLoading}
        submit={submit}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
}

export default SingleArticlePage;
