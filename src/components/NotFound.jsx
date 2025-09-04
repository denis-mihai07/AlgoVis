import "../css/NotFound.css";
import NotFoundImage from "../assets/notfound.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="notfound_container">
        <div className="notfound">
          <img className="notfound_image" src={NotFoundImage} />
          <span className="notfound_text">Sorry, page not found</span>
          <Link to={"/"}>Return Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
