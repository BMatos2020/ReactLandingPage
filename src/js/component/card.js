import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ border: "none" }}>
			<a href={props.cardLink} className=" stretched-link" />
			<div className="card" style={{ width: "18rem;" }}>
				<img
					className="card-img-top"
					src={props.cardImage}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle}</h5>
					<p className="card-text">{props.cardText}</p>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	cardLink: PropTypes.string,
	cardImage: PropTypes.string,
	cardTitle: PropTypes.string,
	cardText: PropTypes.string
};
