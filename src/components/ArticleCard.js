import { useState } from "react";
import { fetchArticles } from "../api";

const ArticleCard = ({ article }) => {
  return <div className="article-card">article card</div>;
};

export default ArticleCard;

// {
//     "articles": [
//       {
//         "author": "Paul Grump",
//         "title": "The Notorious MSG’s Unlikely Formula For Success",
//         "article_id": 34,
//         "topic": "cooking",
//         "created_at": "2020-11-22T11:13:00.000Z",
//         "votes": 0,
//         "comment_count": 300
//       }]}
