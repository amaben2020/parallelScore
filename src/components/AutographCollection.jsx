import React from "react";
import { Link } from "react-router-dom";

const AutographCollection = () => {
	return (
		<div className="autograph__collection">
			<Link
				className="autograph__collection--link"
				style={{
					color: "white",
					textDecoration: "none",
					fontSize: "1.3rem",
					fontWeight: "600",
				}}
			>
				Domes of Eluonda, Autograph Collection, Greece{" "}
			</Link>
		</div>
	);
};

export default AutographCollection;
