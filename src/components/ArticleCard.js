import { useState } from "react";
import { fetchArticles } from "../api";

const ArticleCard = ({ article }) => {
  return (
    <div className="ArticleCard">
      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <p>subcategory:{article.topic}</p>
      <p>Comments({article.comment_count})</p>
      <p>votes: {article.votes}</p>
      <p>created on: {article.created_at.split("T")[0]}</p>
    </div>
  );
};

export default ArticleCard;

// example object for reference:
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
