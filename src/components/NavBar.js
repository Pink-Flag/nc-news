import { Link } from "react-router-dom";

import { useState } from "react";
import TopicsMenu from "./TopicsMenu";

const NavBar = () => {
  const [popUp, setPopUp] = useState(false);
  console.log(popUp);
  return (
    <footer className="navBar">
      <div className="navBar">
        <div>Home</div>

        <div className="topics-menu">
          {popUp ? <TopicsMenu /> : null}
          <button onClick={() => setPopUp(!popUp)}>TOPICS</button>
          {/* {popUp && TopicsMenu()} */}
        </div>

        <div>Sort</div>
        <div>Menu</div>


const NavBar = () => {
  return (
    <footer className="navBar">
      <div class="navbar">
        <a>Home</a>
        <a>
          <Link className="links" to="/topics">
            Topics
          </Link>
        </a>
        <a>Sort</a>
        <a>Menu</a>

      </div>
    </footer>
  );
};

export default NavBar;
