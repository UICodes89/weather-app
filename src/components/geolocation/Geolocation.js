import React from "react";
import LongitudeAndLatitude from "../longitudeAndLatitude/LongitudeAndLatitude";

export default function Geolocation() {
	// @ts-ignore
	const getClass = (data) => {
		return data;
	};
	return (
		<div>
			<div className={`${true ? getClass("rainy") : ""}`}>
				<LongitudeAndLatitude />
			</div>
		</div>
	);
}
