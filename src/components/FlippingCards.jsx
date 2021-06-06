import React from "react";
import "./../Sass/components/_cards.scss";
const FlippingCards = () => {
	return (
		<section className="section-tours" id="section-tours">
			<div className="u-center-text u-margin-bottom-large">
				<h2 className="heading-secondary">Get The Best Developers</h2>
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
									The Tech Giant &#128187;{" "}
								</span>
							</h4>

							<div className="card__details">
								<ul>
									<li>ParallelScore</li>
									<li>Innovation</li>
									<li>User Experience</li>
									<li>Emerging Technologies</li>
									<li>BlockChain</li>
								</ul>
							</div>
						</div>
						<div className="card__side card__side--back card__side--back-1">
							<div className="card__cta">
								<div className="card__cta__price-box">
									<p className="card__cta__price-only">Only</p>
									<p className="card__cta__price-value">$299</p>
									<a href="#popup" className="btn btn--white">
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

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
									The Tech Giant &#128187;{" "}
								</span>
							</h4>

							<div className="card__details">
								<ul>
									<li>ParallelScore</li>
									<li>Innovation</li>
									<li>User Experience</li>
									<li>Emerging Technologies</li>
									<li>BlockChain</li>
								</ul>
							</div>
						</div>
						<div className="card__side card__side--back card__side--back-1">
							<div className="card__cta">
								<div className="card__cta__price-box">
									<p className="card__cta__price-only">Only</p>
									<p className="card__cta__price-value">$299</p>
									<a href="#popup" className="btn btn--white">
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

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
									The Tech Giant &#128187;{" "}
								</span>
							</h4>

							<div className="card__details">
								<ul>
									<li>ParallelScore</li>
									<li>Innovation</li>
									<li>User Experience</li>
									<li>Emerging Technologies</li>
									<li>BlockChain</li>
								</ul>
							</div>
						</div>
						<div className="card__side card__side--back card__side--back-1">
							<div className="card__cta">
								<div className="card__cta__price-box">
									<p className="card__cta__price-only">Only</p>
									<p className="card__cta__price-value">$299</p>
									<a href="#popup" className="btn btn--white">
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="u-center-text u-margin-bottom-small">
				<a href="#" className="btn btn--green">
					Talk To Us
				</a>
			</div>
		</section>
	);
};

export default FlippingCards;
