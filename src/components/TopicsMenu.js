import React, { useEffect, useState } from "react";
import { fetchTopics } from "../api";

import { Link } from "react-router-dom";

function TopicsMenu() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div className="pop-up">
      {topics.map((topic) => {
        return (
          <Link className="links" to={`/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </div>


function TopicsMenu() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetchTopics().then((topics) => {
      console.log(topics);
      setTopics(topics);
    });
  }, []);
  return (
    <section>
      <ul>
        {topics.map((topic) => {
          return <ul>{topic.slug}</ul>;
        })}
      </ul>
    </section>

  );
}

export default TopicsMenu;
