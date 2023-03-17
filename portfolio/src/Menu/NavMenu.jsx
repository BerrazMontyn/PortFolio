import React from 'react';
import {
	FaAngleRight,
	FaAngleLeft, 
	FaBars
} from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavStyles.css";

const ICON_SIZE = 20;

function NavMenu({visible, show}) {

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<Link
						className="logo"
						to="/"
					>
							<img
								src="https://cdn-icons-png.flaticon.com/512/2647/2647350.png"
								alt="logo"
							/>
					</Link>
					<div className="links nav-top">
						<Link to="about" className="nav-link">
							
							<span>About</span>
						</Link>
						<Link to="skills" className="nav-link">
							
							<span>Skills</span>
						</Link>
						<Link to="projects" className="nav-link">
							
							<span>Projects</span> 
						</Link>
					</div>
				</div>
			</nav>
		</>
  );
}

export default NavMenu;