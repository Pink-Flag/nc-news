import React from "react";
import arrow_up from "../arrow_up.svg";
import arrow_down from "../arrow_down.svg";

function VoteDisplay({
  articleVotes,
  setArticleVotes,
  article_id,
  patchVotes,
}) {
  const handleVote = (num) => {
    setArticleVotes(articleVotes + num);
    patchVotes(article_id, num).catch((err) => {
      alert("something has gone wrong! please try again");
      setArticleVotes(articleVotes - num);
    });
  };

  return (
    <>
      <div className="voteLink">
        <img
          src={arrow_up}
          className="votingArrows"
          onClick={() => handleVote(1)}
        />
        <>{articleVotes}</>
        <img
          src={arrow_down}
          className="votingArrows"
          onClick={() => handleVote(-1)}
        />

        {/* {articleVotes === 1 ? (
          <>{articleVotes} vote</>
        ) : (
          <>{articleVotes} votes</>
        )} */}
      </div>
    </>
  );
}

export default VoteDisplay;
