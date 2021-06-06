import React from "react";
import { Link } from "react-router-dom";
import "./../Sass/components/_footer_with_headers.scss";
import Logo from "./Logo";
import { LogoFooter } from "./LogoFooter";

const FooterWithHeaders = () => {
	return (
		<div className="footer_headers">
			<p className="footer_headers--logo">
				{" "}
				<LogoFooter />
			</p>
			<div className="footer_headers--line-1">
				<div className="footer_headers--line-1--text--1">
					<p> LUXURY</p>
				</div>
				<div className="footer_headers--line-1__child">
					<Link className="footer_headers--line-1__child-1"> </Link>
					<Link className="footer_headers--line-1__child-2"> </Link>
					<Link className="footer_headers--line-1__child-3"> </Link>
					<Link className="footer_headers--line-1__child-4"> </Link>
					<Link className="footer_headers--line-1__child-5"> </Link>
					<Link className="footer_headers--line-1__child-6"> </Link>
				</div>
			</div>

			<div className="footer_headers--line-2">
				<div className="footer_headers--line-2--text--2">
					<p> PREMIUM</p>
				</div>
				<div className="footer_headers--line-2__child">
					<Link className="footer_headers--line-2__child-1"></Link>
					<Link className="footer_headers--line-2__child-2"></Link>
					<Link className="footer_headers--line-2__child-3"></Link>
					<Link className="footer_headers--line-2__child-4"></Link>
					<Link className="footer_headers--line-2__child-5"></Link>
					<Link className="footer_headers--line-2__child-6"></Link>
					<Link className="footer_headers--line-2__child-7"></Link>
					<Link className="footer_headers--line-2__child-8"></Link>
					<Link className="footer_headers--line-2__child-9"></Link>
					<Link className="footer_headers--line-2__child-10"></Link>
					<Link className="footer_headers--line-2__child-11"></Link>
				</div>
			</div>

			<div className="footer_headers--line-3">
				<div className="footer_headers--line-3--text--3">
					<p> SELECT</p>
				</div>
				<div className="footer_headers--line-3__child">
					<Link className="footer_headers--line-3__child-1"></Link>
					<Link className="footer_headers--line-3__child-2"></Link>
					<Link className="footer_headers--line-3__child-3"></Link>
					<Link className="footer_headers--line-3__child-4"></Link>
					<Link className="footer_headers--line-3__child-5"></Link>
					<Link className="footer_headers--line-3__child-6"></Link>
					<Link className="footer_headers--line-3__child-7"></Link>
					<Link className="footer_headers--line-3__child-8"></Link>
				</div>
			</div>

			<div className="footer_headers--line-4">
				<div className="footer_headers--line-4--text--4">
					<p> LONGER STAYS</p>
				</div>
				<div className="footer_headers--line-4__child">
					<Link className="footer_headers--line-4__child-1"></Link>
					<Link className="footer_headers--line-4__child-2"></Link>
					<Link className="footer_headers--line-4__child-3"></Link>
					<Link className="footer_headers--line-4__child-4"></Link>
					<Link className="footer_headers--line-4__child-5"></Link>
				</div>
			</div>
		</div>
	);
};

export default FooterWithHeaders;
