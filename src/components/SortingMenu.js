import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Dropdown, ButtonGroup, ToggleButton } from "react-bootstrap";

function SortingMenu() {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
  });

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

  //   const radioButton = React.createRef();

  const resetButton = () => {
    setRadioValue("desc");
  };

  return (
    <>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sorted By : {searchParams.get("sort_by")}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setSearchParams({ sort_by: "author" });
                resetButton();
              }}
            >
              Sort by Author
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSearchParams({ sort_by: "votes" });
                resetButton();
              }}
            >
              Sort by Votes
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSearchParams({ sort_by: "title" });
                resetButton();
              }}
            >
              Sort by Title
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSearchParams({ sort_by: "created_at" });
                resetButton();
              }}
            >
              Sort by Date
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              //   ref={radioButton}
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
