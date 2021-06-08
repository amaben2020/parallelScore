import React from "react";
import "./../../Sass/components/_navbar.scss";
import { navlinks } from "../../data/nav_links2.js";
import { Link } from "react-router-dom";

import Sidebar from "./../SideBar";
import Logo2 from "./Logo2";
import Navbar2Secondary from "./Navbar2Secondary";

const NavBar2 = () => {
	return (
		<nav className="navbar2">
			<Sidebar />
			<Logo2 />
			<Navbar2Secondary />
			{navlinks.map((navlink) => (
				<ul className="navbar2__ul">
					<Link to={`${navlink.link}`} style={{ textDecoration: "none" }}>
						{" "}
						<li className="navbar2__ul--li">{navlink.name} </li>{" "}
					</Link>
				</ul>
			))}
			<button className="navbar2__ul--li--button"> BOOK NOW</button>
		</nav>
	);
};

export default NavBar2;
