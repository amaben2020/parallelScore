import React from "react";
import "./../Sass/components/_cards.scss";
import { cardData1 } from "./../data/card1";
const FlippingCards = () => {
	return (
		<section className="section-tours" id="section-tours">
			<div className="u-center-text u-margin-bottom-large">
				<h2 className="heading-secondary">Hire The Best Developers</h2>
			</div>
			<div className="row" style={{ paddingLeft: "17vh" }}>
				{cardData1.map((card) => (
					<div className="col-1-of-3" key={card.id}>
						<div className="card">
							<div className="card__side card__side--front card__side--front-1">
								<div className="card__picture card__picture--1">
									<img
										className="card__picture card__picture--1"
										src={card.image}
									/>
									&nbsp;
								</div>

								<h4 className="card__heading">
									<span className="card__heading-span--1">
										{" "}
										{card.title}&#128187;
									</span>
								</h4>

								<div className="card__details">
									<ul>
										<li>{card.detail1}</li>
										<li>{card.detail2}</li>
										<li>{card.detail3}</li>
										<li>{card.detail4}</li>
										<li>{card.detail5}</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__cta__price-box">
										<p className="card__cta__price-only">Only</p>
										<p className="card__cta__price-value">{card.price}</p>
										<a href="#popup" className="btn btn--white">
											Contact Us
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FlippingCards;
