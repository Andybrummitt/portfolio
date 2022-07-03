import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import "./button.styles.scss";

const Button = ({ innerText, path, btnClass }) => {
  const navHeight = 0.1 * window.innerHeight;

  return (
    <button className={`link-button ${btnClass ? btnClass : ""}`}>
      <Link
        to={path}
        spy={true}
        smooth={true}
        offset={-navHeight}
        duration={500}
      >
        <span>{innerText}</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </button>
  );
};

export default Button;
