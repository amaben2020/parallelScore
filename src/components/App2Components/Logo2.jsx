import React from "react";
import { Link } from "react-router-dom";
import "./../../Sass/components/_logo2.scss";
import image from "./../../img/hero-small.jpg";
import logo from "../../img/logo-2/logo-2.PNG";
import LogoSVG from "./LogoSVG";
const Logo2 = () => {
	return (
		<div className="header2__logo-box">
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="logo-2">
					<LogoSVG className="header2__logo-2" />
				</div>
			</Link>{" "}
		</div>
	);
};

export default Logo2;
