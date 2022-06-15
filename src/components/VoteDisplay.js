import React from "react";

function VoteDisplay({
  articleVotes,
  setArticleVotes,
  article_id,
  patchVotes,
}) {
  console.log(articleVotes);
  const handleVote = (num) => {
    setArticleVotes(articleVotes + num);
    patchVotes(article_id, num).catch((err) => {
      alert("something has gone wrong! please try again");
      setArticleVotes(articleVotes - num);
    });
  };

  return (
    <div className="voteLink">
      <button onClick={() => handleVote(1)}>⬆️</button>
      <button onClick={() => handleVote(-1)}>⬇️</button>
      {articleVotes} votes
    </div>
  );
}

export default VoteDisplay;
