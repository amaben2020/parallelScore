import React from "react";
import "./../Sass/components/_navbar-secondary.scss";
import user from "./../img/logo/user.png";
import trip from "./../img/logo/trip.png";
import help from "./../img/logo/help.png";
import earth from "./../img/logo/earth.png";
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
					&#x1F30D;
					<p className="navbar_secondary--item-1__first--text">
						{" "}
						English{" "}
					</p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					&#x1f9f3;
					<p className="navbar_secondary--item-1__first--text"> Help </p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					&#x1f9f3;
					<p className="navbar_secondary--item-1__first--text">
						{" "}
						My Trips{" "}
					</p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary--item-1">
				{" "}
				<div className="navbar_secondary--item-1__first">
					&#x1f9f3;
					<p className="navbar_secondary--item-1__first--text">
						{" "}
						Sign In or Join
					</p>{" "}
				</div>
			</nav>
		</div>
	);
};

export default NavBarSecondary;
