import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer_container">
        <div className="copyright">
          <FontAwesomeIcon className="icon" icon={faCopyright} />
          <span className="text">{currentYear} Birtalan Denis</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
