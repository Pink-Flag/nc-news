import { useEffect } from "react";
import { Link } from "react-router-dom";
import confusedWalter from "../confusedWalter.png";

const NotFound = ({ errorMessage }) => {
  useEffect(() => {
    document.title = "NC News";
  });

  return (
    <section>
      <Link to={"/"}>
        <img
          className="errorDog"
          src={confusedWalter}
          alt="error message image"
        />
      </Link>
      <Link className="homeLink" to={"/"}>
        <div className="homeLink">
          Something has gone wrong. <br />
          Please click here to return home!
        </div>
      </Link>
      <p>{errorMessage}</p>
    </section>
  );
};

export default NotFound;

//   <Link className="links" to="/">
//           <img src={house} alt="home button" className="homeIcon" />
//         </Link>
