import React from "react";
import headerText from "./../../src/data/header.json";
import AutographCollection from "./AutographCollection";
const Hero = () => {
	const hText = Object.keys(headerText).map((h) => headerText.text1);
	return (
		<div>
			<header className="header">
				<AutographCollection />
				<div className="header__text-box">
					<h1 className="heading-primary">
						<span className="heading-primary--main">{hText} </span>
					</h1>

					<a href="#" className="btn btn--white btn--animated">
						Learn More{" "}
					</a>
				</div>
			</header>
		</div>
	);
};

export default Hero;
