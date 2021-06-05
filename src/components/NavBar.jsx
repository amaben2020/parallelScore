import React from "react";
import Logo from "./Logo";
import "./../Sass/components/_navbar.scss";
import { navlinks } from "./../data/nav_links";
import { Link } from "react-router-dom";
import NavBarSecondary from "./NavBarSecondary";
const NavBar = () => {
	return (
		<nav className="navbar">
			<Logo />
			<NavBarSecondary />
			{navlinks.map((navlink) => (
				<ul className="navbar__ul">
					<Link to={`${navlink.link}`} style={{ textDecoration: "none" }}>
						{" "}
						<li className="navbar__ul--li">{navlink.name}</li>{" "}
					</Link>
				</ul>
			))}
		</nav>
	);
};

export default NavBar;
