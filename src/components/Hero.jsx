import React from "react";
import "./../Sass/layout/_header.scss";
import headerText from "../data/header.json";
import AutographCollection from "./AutographCollection";
const Hero = () => {
	const hText = Object.keys(headerText).map((h) => headerText.text1);
	return (
		<header className="header">
			<AutographCollection />
			<h3 className="heading-3" style={{ opacity: 0 }}>
				just need an invisible item on the screen... OOps
			</h3>
			<h1 className="heading-1 heading-primary--main">{hText}</h1>
			<button className="btn header__btn">Learn More</button>
		</header>
	);
};

export default Hero;
