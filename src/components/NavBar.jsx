import React from "react";
import Logo from "./Logo";
import "./../Sass/components/_navbar.scss";
import { navlinks } from "./../data/nav_links";
import { Link } from "react-router-dom";
import NavBarSecondary from "./NavBarSecondary";
import Sidebar from "./SideBar";

const NavBar = () => {
	function refreshPage() {
		setTimeout(() => {
			window.location.reload();
		}, 0.1);
	}
	return (
		<nav className="navbar">
			<Sidebar />
			<Logo />
			<NavBarSecondary />
			{navlinks.map((navlink) => (
				<ul className="navbar__ul">
					<Link
						onClick={refreshPage}
						to={`${navlink.link}`}
						style={{ textDecoration: "none" }}
					>
						{" "}
						<li className="navbar__ul--li">{navlink.name} </li>{" "}
					</Link>
				</ul>
			))}
		</nav>
	);
};

export default NavBar;
