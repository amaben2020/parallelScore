import React from "react";
import "./../Sass/components/_cards.scss";
const FlippingCards = () => {
	return (
		<section className="section-tours" id="section-tours">
			<div className="u-center-text u-margin-bottom-large">
				<h2 className="heading-secondary">Most popular tours</h2>
			</div>
			<div className="row">
				<div className="col-1-of-3">
					<div className="card">
						<div className="card__side card__side--front card__side--front-1">
							<div className="card__picture card__picture--1">
								<img
									className="card__picture card__picture--1"
									src="./img/nat-5.jpg"
								/>
								&nbsp;
							</div>

							<h4 className="card__heading">
								<span className="card__heading-span--1">
									{" "}
									The Sea Explorer{" "}
								</span>
							</h4>

							<div className="card__details">
								<ul>
									<li>3 days tour</li>
									<li>Buy and enjoy</li>
									<li>Up to 30 fucktards</li>
									<li>Recreate every memory</li>
									<li>I am a better developer</li>
								</ul>
							</div>
						</div>
						<div className="card__side card__side--back card__side--back-1">
							<div className="card__cta">
								<div className="card__cta__price-box">
									<p className="card__cta__price-only">Only</p>
									<p className="card__cta__price-value">$299</p>
									<a href="#popup" className="btn btn--white">
										Book Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-1-of-3">
					<div className="card">
						<div className="card__side card__side--front card__side--front-1">
							FRONT
						</div>
						<div className="card__side card__side--back card__side--back-1">
							BACK
						</div>
					</div>
				</div>
				<div className="col-1-of-3">
					<div className="card">
						<div className="card__side card__side--front card__side--front-1">
							FRONT
						</div>
						<div className="card__side card__side--back card__side--back-1">
							BACK
						</div>
					</div>
				</div>
			</div>

			<div className="u-center-text u-margin-bottom-small">
				<a href="#" className="btn btn--green">
					Discover More
				</a>
			</div>
		</section>
	);
};

export default FlippingCards;
