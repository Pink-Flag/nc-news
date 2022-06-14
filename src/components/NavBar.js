import { Link } from "react-router-dom";

import { useState } from "react";
import TopicsMenu from "./TopicsMenu";

const NavBar = () => {
  const [popUp, setPopUp] = useState(false);

  return (
    <footer className="navBar">
      <div className="navBar">
        <Link className="links" to="/">
          <div>Home</div>
        </Link>
        <div className="topics-menu">
          {popUp ? <TopicsMenu /> : null}
          <button onClick={() => setPopUp(!popUp)}>TOPICS</button>
          {/* {popUp && TopicsMenu()} */}
        </div>

        <div>Sort</div>
        <div>Menu</div>
      </div>
    </footer>
  );
};

export default NavBar;
