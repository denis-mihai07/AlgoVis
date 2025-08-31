import "../css/Header.css";
import AlgoVisLogo from "../assets/AlgoVisIcon.svg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleMenuClick = () => setMenuVisibility((prev) => !prev);

  return (
    <>
      <div className="header_container">
        <div className="header">
          <div className="header_logo">
            <img src={AlgoVisLogo} />
          </div>
          <div className="header_nav">
            <ul className="header_list">
              <li>
                <Link
                  className={`${location.pathname === "/" ? "selected" : ""}`}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    location.pathname === "/sorting" ? "selected" : ""
                  }`}
                  to={"/sorting"}
                >
                  Sorting
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    location.pathname === "/searching" ? "selected" : ""
                  }`}
                  to={"/searching"}
                >
                  Searching
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    location.pathname === "/graph" ? "selected" : ""
                  }`}
                  to={"/graph"}
                >
                  Graph
                </Link>
              </li>
              <li>
                <a href="https://github.com/denis-mihai07" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="github_icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/denis-birtalan-b429a1374/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="github_icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="header_menu_button" onClick={handleMenuClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {menuVisibility && (
        <div className="header_menu">
          <Link
            className={`menu_button ${
              location.pathname === "/" ? "selected2" : ""
            }`}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={`menu_button ${
              location.pathname === "/sorting" ? "selected2" : ""
            }`}
            to={"/sorting"}
          >
            Sorting
          </Link>
          <Link
            className={`menu_button ${
              location.pathname === "/searching" ? "selected2" : ""
            }`}
            to={"/searching"}
          >
            Searching
          </Link>
          <Link
            className={`menu_button ${
              location.pathname === "/graph" ? "selected2" : ""
            }`}
            to={"/graph"}
          >
            Graph
          </Link>
          <div className="menu_button">
            <a href="https://github.com/denis-mihai07" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="github_icon_menu" />
            </a>
            <a
              href="https://www.linkedin.com/in/denis-birtalan-b429a1374/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="github_icon_menu" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
