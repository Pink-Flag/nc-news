import React, { useEffect, useState } from "react";
import { fetchTopics } from "../api";

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
