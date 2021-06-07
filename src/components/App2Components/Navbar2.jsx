import React from "react";
import "./../../Sass/components/_navbar.scss";
import { navlinks } from "../../data/nav_links.js";
import { Link } from "react-router-dom";
import NavBarSecondary from "./../NavBarSecondary";
import Sidebar from "./../SideBar";
import Logo2 from "./Logo2";

const NavBar2 = () => {
	return (
		<nav className="navbar">
			<Sidebar />
			<Logo2 />
			<NavBarSecondary />
			{navlinks.map((navlink) => (
				<ul className="navbar__ul">
					<Link to={`${navlink.link}`} style={{ textDecoration: "none" }}>
						{" "}
						<li className="navbar__ul--li">{navlink.name} </li>{" "}
					</Link>
				</ul>
			))}
		</nav>
	);
};

export default NavBar2;
