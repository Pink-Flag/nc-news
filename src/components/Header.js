import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import dog from "../dog.jpeg";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="header">
      <Link className="links" to="/">
        <h1 className="titlebar">Read It</h1>
      </Link>
      <div className="currUser">
        {user} <img src={dog} className="avatar" alt="dog avatar" />
      </div>{" "}
    </div>
  );
};

export default Header;
