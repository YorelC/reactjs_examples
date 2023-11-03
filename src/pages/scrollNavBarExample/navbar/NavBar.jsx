import { useNavigate } from "react-router-dom";
import UlLinksSections from "../../../components/uls/ulLinksSections/UlLinksSections";
import { buttonBackHomeStyle, navStyle } from "./navBarStyles";
import { HOME } from "../../../constants/routes";

const sections = ["home", "about", "services", "contact"];

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={navStyle}>
      <button
        className={buttonBackHomeStyle}
        onClick={() => navigate(HOME.route)}
      >
        BACK MENU
      </button>
      <UlLinksSections sections={sections} />
    </nav>
  );
};

export default NavBar;
