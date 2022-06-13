import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="links" to="/">
        <h1 className="titlebar">Read It</h1>
      </Link>
    </div>
  );
};

export default Header;
