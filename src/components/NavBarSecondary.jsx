import React from "react";
import "./../Sass/components/_navbar-secondary.scss";
import GlobeSVG from "./GlobeSVG";
import UserSVG from "./UserSVG";
import TripSVG from "./TripSVG";
import HelpSVG from "./HelpSVG";
const NavBarSecondary = () => {
	return (
		<div className="navbar_secondary">
			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					<GlobeSVG className="navbar_secondary--item-1__first--globe" />
					<p className="navbar_secondary--item-1__first--text">English </p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					<HelpSVG className="navbar_secondary--item-1__first--help" />
					<p className="navbar_secondary--item-1__first--text"> Help </p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					<TripSVG className="navbar_secondary--item-1__first--trip" />
					<p className="navbar_secondary--item-1__first--text">
						{" "}
						My Trips{" "}
					</p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					<UserSVG className="navbar_secondary--item-1__first--user" />
					<p className="navbar_secondary--item-1__first--text">
						{" "}
						Sign In or Join{" "}
					</p>{" "}
				</div>
			</nav>
		</div>
	);
};

export default NavBarSecondary;
