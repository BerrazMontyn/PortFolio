import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavStyles.css";

export default function NavMenu() { 
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sidebar">
      <ul className={showMenu ? "menu-mobile" : ""}>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2647/2647350.png"
            width={100}
            height={100}
            alt="Logo tipo "
          />
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={() => setShowMenu(false)}>English</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHamburgerClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

