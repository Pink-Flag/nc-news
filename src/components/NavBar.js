import { Link } from "react-router-dom";

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
