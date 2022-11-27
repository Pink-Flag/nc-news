import { useEffect } from "react";
import { Link } from "react-router-dom";
import confusedWalter from "../confusedWalter.png";

const NotFound = ({ errorMessage }) => {
  return (
    <section>
      <Link to={"/"}>
        <img className="errorDog" src={confusedWalter} alt="error message" />
      </Link>
      <Link className="homeLink" to={"/"}>
        <div className="homeLink">
          We can't find the content you are looking for :( <br />
          Please click here to return home!
        </div>
      </Link>
      <p>{errorMessage}</p>
    </section>
  );
};

export default NotFound;
