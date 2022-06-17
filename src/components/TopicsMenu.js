import React, { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

function TopicsMenu() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div className="dropup">
      {topics.map((topic) => {
        return (
          <Dropdown.Item
            className="menuTopics"
            as={Link}
            to={`/topic/${topic.slug}`}
            key={topic.slug}
          >
            {topic.slug}
          </Dropdown.Item>
        );
      })}
    </div>
  );
}

export default TopicsMenu;
