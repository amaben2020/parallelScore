import React from "react";
import img from "../img/hero.jpg";
import { cardData } from "./../data/card2";
export default function Cards2() {
	return (
		<div className="row">
			{cardData.map((card) => (
				<div className="col-1-of-4" key={card.id}>
					<div className="feature-box">
						{/* <i className="feature-box__icon icon-basic-world"></i> */}
						<img
							className="feature-box__icon icon-basic-world"
							src={card.image}
							// src={img}
							style={{ width: "100%" }}
						/>
						{/* <img className="feature-box__icon" src={img} /> */}
						<h3 className="heading-tertiary u-margin-bottom-small">
							{card.title}
						</h3>
						<p className="feature-box__text">{card.text.substring(0, 40)}...</p>
					</div>
				</div>
			))}
		</div>
	);
}
