import React from "react";
import { Link } from "react-router-dom";
import logoText from "./../data/logo.json";
import "./../Sass/components/_logo.scss";
export const LogoFooter = () => {
	const text = Object.values(logoText).map((text) => text);
	return (
		<Link to="/" style={{ textDecoration: "none" }}>
			<div className="logo--footer">
				<p className="logo--footer__text">
					{" "}
					<span className="logo--footer__text--word">{text} </span> Bonv
					<span
						style={{
							marginLeft: "-10px",
							fontSize: "1.6rem",
							position: "relative",
							bottom: "5px",
						}}
					>
						{" "}
						o
					</span>
					y<span className="logo--footer__text--word__2"> &trade; </span>
				</p>
			</div>
		</Link>
	);
};
