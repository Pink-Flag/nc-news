import React, { useEffect, useState } from "react";
import { fetchTopics } from "../api";

import { Link } from "react-router-dom";
import { BreadcrumbItem } from "react-bootstrap";

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
          <Link className="dropbtn" to={`/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </div>
  );
}

export default TopicsMenu;
