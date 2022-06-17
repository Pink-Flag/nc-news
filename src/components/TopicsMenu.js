import React, { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { Dropdown } from "react-bootstrap";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

function TopicsMenu() {
  const [topics, setTopics] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setError(true);
      });
  }, []);

  if (error) return <NotFound errorMessage={errorMessage} />;

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
