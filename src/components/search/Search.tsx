import React, { useState } from "react";
import ErrorMessage from '../errors/ErrorMessage';
import Tempture from "../tempture/Tempture";
import utill from "../../service/utill";

export default function SearchComponent() {
	const [search, setSearch] = useState("");
	const [result, setResult] = useState({});
	const [errors, serErrors] = useState(false);
	const [message, setMessage] = useState("");

	const onSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		serErrors(false);
		setMessage('');
		let result: any = await utill.tempByCity(search);
		debugger
		if (result)
			setResult(result);
		else {
			serErrors(true);
			setSearch('');
			setMessage(result ? result : 'Error Occured!! Please Try Again!')
			setResult({});
		}
	};

	const searchByGeolocation = () => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			setSearch('');
			serErrors(false);
			setMessage('');
			let result: any = await utill.tempByGeolocation(position.coords.latitude, position.coords.longitude);
			if (result)
				setResult(result);
			else {
				serErrors(true);
				setSearch('');
				setMessage(result ? result : 'Error Occured!! Please Try Again!')
				setResult({});
			}


		});
	}
	return (
		<>
			<div className="search_container">
				<form onSubmit={(event) => onSubmit(event)}>
					<input type="text" placeholder="Please enter a city name" className="search-field" value={search} onChange={(e) => setSearch(e.target.value)} />
					<button type="submit" className="search-btn" disabled={!search.length}>search</button>
					<span className="location" title="select location" onClick={(e) => searchByGeolocation()}></span>
				</form>
			</div>
			<ErrorMessage errors={errors} message={message} />
			{Object.keys(result).length ? <Tempture {...result} /> : null}
		</>
	);
}
