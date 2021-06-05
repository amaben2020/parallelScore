import React from "react";
import "./../Sass/components/_navbar-secondary.scss";

const NavBarSecondary = () => {
	return (
		<div className="navbar_secondary">
			<nav className="navbar_secondary--item-1">
				{" "}
				<i class="fas fa-globe-asia"></i> English
			</nav>

			<nav className="navbar_secondary--item-1">Help</nav>
			<nav className="navbar_secondary--item-1">My Trips</nav>
			<nav className="navbar_secondary--item-1">Sign In or Join</nav>
		</div>
	);
};

export default NavBarSecondary;
