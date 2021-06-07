import React from "react";
import { navlinks } from "./../data/nav_links.js";
import ChevronRightSVG from "./ChevronRightSVG.jsx";

const Sidebar = () => {
	console.log(typeof navlink);
	return (
		<div className="navigation">
			<input
				type="checkbox"
				className="navigation__checkbox"
				id="navi-toggle"
			/>
			<label for="navi-toggle" className="navigation__button">
				<span className="navigation__icon">&nbsp;</span>
			</label>
			<div className="navigation__background">&nbsp;</div>

			<nav className="navigation__nav">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							Find & Reserve{" "}
							{/* <span
								style={{
									marginLeft: "60vw",
									color: "black",
									marginTop: "-1vh",
								}}
							>
								&#10132;{" "}
							</span> */}
						</a>
						<ChevronRightSVG className="navigation__item--right-1" />
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							Special Offers
						</a>
						<ChevronRightSVG className="navigation__item--right-2" />
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							Vacations
						</a>
						<ChevronRightSVG className="navigation__item--right-3" />
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							{" "}
							Our Brands
						</a>
						<ChevronRightSVG className="navigation__item--right-4" />
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							{" "}
							Our Credit Cards
						</a>
						<ChevronRightSVG className="navigation__item--right-5" />
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							{" "}
							About Marriott Bonvoy
						</a>
						<ChevronRightSVG className="navigation__item--right-6" />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
