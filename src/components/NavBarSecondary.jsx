import React from "react";
import "./../Sass/components/_navbar-secondary.scss";
import earth from "./../img/logo-nav/globe.svg";
import user from "./../img/logo-nav/user.svg";
import trip from "./../img/logo-nav/trip.svg";
import help from "./../img/logo-nav/help.svg";
import { FaPencilAlt } from "react-icons/fa";
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
					{/* <img
						className="navbar_secondary--item-1__first--image"
						style={{ width: "1.5rem" }}
						src={earth}
					/> */}
					{/* &#x1F30D; */}
					<GlobeSVG className="navbar_secondary--item-1__first--globe" />
					<p className="navbar_secondary--item-1__first--text">English </p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					{/* &#x1f9f3; */}
					<HelpSVG className="navbar_secondary--item-1__first--help" />
					<p className="navbar_secondary--item-1__first--text"> Help </p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					{/* &#x1f9f3; */}
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
					{/* &#x1f9f3; */}
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
