import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function SortingMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setSearchParams({ sort_by: "author" })}>
          Sort by Author
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setSearchParams({ sort_by: "votes" })}>
          Sort by Votes
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setSearchParams({ sort_by: "title" })}>
          Sort by Title
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => setSearchParams({ sort_by: "created_at" })}
        >
          Sort by Date
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortingMenu;
