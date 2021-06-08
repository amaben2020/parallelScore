import React from "react";

import MailSVG from "./MailSVG";
import User2SVG from "./User2SVG";

import "./../../Sass/components/_navbar-secondary2.scss";
import LogoSVGsmall from "./LogoSVGsmall";
import { Link } from "react-router-dom";

const Navbar2Secondary = () => {
	return (
		<div className="navbar_secondary2">
			<nav className="navbar_secondary2--item-1">
				{" "}
				<div className="navbar_secondary2--item-1__first">
					{/* &#x1f9f3; */}
					<MailSVG className="navbar_secondary2--item-1__first--travel" />
					<p className="navbar_secondary2--item-1__first--text">
						{" "}
						Travel Agents{" "}
					</p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary2--item-1">
				{" "}
				<div className="navbar_secondary2--item-1__first">
					{/* &#x1f9f3; */}
					<User2SVG className="navbar_secondary2--item-1__first--signin" />
					<p className="navbar_secondary2--item-1__first--text">
						{" "}
						Sign In or Join{" "}
					</p>{" "}
				</div>
			</nav>

			<nav className="navbar_secondary2--item-1">
				{" "}
				<Link className="navbar_secondary2--item-1__first">
					<LogoSVGsmall className="navbar_secondary2--item-1__first--trip" />
				</Link>
			</nav>

			{/* <nav className="navbar_secondary2--item-1">
				{" "}
				<div className="navbar_secondary2--item-1__first">
					<img src={logoImg} style={{ width: "8rem" }} />
				</div>
			</nav> */}
		</div>
	);
};

export default Navbar2Secondary;
