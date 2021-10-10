import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { geolocated, geoPropTypes } from "react-geolocated";
import Tempture from "../tempture/Tempture";
import axios from "axios";

export default function SearchComponent() {
	const sampleAppContext = useContext(ThemeContext);
	const [search, setSearch] = useState("");
	const [result, setResult] = useState({});
	const onSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		var config = {
			url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=086368406f95097df8d0f36099304a44`
		};
		axios.get(config.url).then((res: any) => {
			let response = {
				tempture: res.data.main.temp,
				city: res.data.name,
				time_diff: res.data.timezone
			};
			setResult(response);
		}).catch((error) => {
			console.log(new Error(error));
		})
	};
	return (
		<>
			<div className="search_container">
				<form onSubmit={(event) => onSubmit(event)}>
					<input type="text" placeholder="Please enter a city name" className="search-field" value={search} onChange={(e) => setSearch(e.target.value)} />
					<button type="submit" className="search-btn">search</button>
					<a href="#" className="location" ></a>
				</form>
			</div>
			{Object.keys(result).length ? <Tempture {...result} /> : null}
		</>
	);
}
