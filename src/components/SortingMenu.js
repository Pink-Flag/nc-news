import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Dropdown, ButtonGroup, ToggleButton } from "react-bootstrap";

function SortingMenu() {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
  });
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("desc");

  const radios = [
    { name: "Asc", value: "asc" },
    { name: "Desc", value: "desc" },
  ];

  useEffect(() => {
    setSearchParams({
      sort_by: searchParams.get("sort_by"),
      order: radioValue,
    });
  }, [radioValue]);

  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => setSearchParams({ sort_by: "author" })}
            >
              Sort by Author
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSearchParams({ sort_by: "votes" })}
            >
              Sort by Votes
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSearchParams({ sort_by: "title" })}
            >
              Sort by Title
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setSearchParams({ sort_by: "created_at" })}
            >
              Sort by Date
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ButtonGroup className="radioButton">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}

export default SortingMenu;
