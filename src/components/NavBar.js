import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import TopicsMenu from "./TopicsMenu";
import house from "../house.svg";
import burger from "../burger.svg";
import sort_down from "../sort_down.svg";
import sort_up from "../sort_up.svg";

const NavBar = () => {
  const [sortBy, setSortBy] = useState(true);

  return (
    <footer className="navBar">
      <div className="navBar">
        <Link className="links" to="/">
          <img src={house} alt="home button" className="homeIcon" />
        </Link>
        <div className="topics-menu">
          <Dropdown className="btn-group dropup ">
            <Dropdown.Toggle
              variant="success"
              id="dropdown-default"
              className="btn btn-dark"
            >
              Topics
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropUpMenu">
              <TopicsMenu />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {sortBy ? (
          <img
            src={sort_down}
            onClick={() => setSortBy(!sortBy)}
            alt="sort button"
            className="sortIcon"
          />
        ) : (
          <img
            src={sort_up}
            onClick={() => setSortBy(!sortBy)}
            alt="sort button"
            className="sortIcon"
          />
        )}

        <img src={burger} alt="menu button" className="menuIcon" />
      </div>
    </footer>
  );
};

export default NavBar;
