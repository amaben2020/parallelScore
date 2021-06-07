import React from "react";
import "./../../Sass/layout/_header2.scss";
import headerText from "../../data/header2.json";
import HeroLine from "./HeroLine";

const Hero = () => {
	const hText = Object.keys(headerText).map((h) => headerText.text1);
	return (
		<header className="header2">
			<h3 className="heading-3" style={{ opacity: 0 }}>
				just need an invisible item on the screen... OOps
			</h3>

			<h1 className="header2--text">{hText}</h1>
			<HeroLine />
			<h3 className="header2--text--sub"> RESORT EXPERIENCES</h3>
			<button className="header2--btn2">EXPLORE</button>
		</header>
	);
};

export default Hero;
