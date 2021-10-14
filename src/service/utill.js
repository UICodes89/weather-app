import axios from "axios";

// @ts-ignore
function msToTime(ms) {
	let seconds = (ms / 1000).toFixed(1);
	let minutes = (ms / (1000 * 60)).toFixed(1);
	// @ts-ignore
	let hours = (ms / (1000 * 60 * 60)).toFixed(1);
	let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
	// @ts-ignore
	if (seconds < 60) return seconds + " Sec";
	// @ts-ignore
	else if (minutes < 60) return minutes + " Min";
	// @ts-ignore
	else if (hours < 24) return hours + " Hrs";
	else return days + " Days";
}
/**
 * @param {number} time
 * @param {number} timezone
 */
function calculateTime(time, timezone) {
	let searchedCityTime = new Date(time * 1000 + timezone * 1000);
	let locaTime = new Date();
	locaTime.setHours(locaTime.getHours() + 1.3);
	// @ts-ignore
	return msToTime(Math.abs(searchedCityTime - locaTime));
}

/**
 * @param {number} tempKelvin
 */
function convertTempKelvinToCentigrade(tempKelvin) {
	// @ts-ignore
	return parseInt(tempKelvin - 273.15);
}

// @ts-ignore
async function tempByCity(city: string) {
	return (
		axios
			.get(`/weather/${city}`)
			// @ts-ignore
			// @ts-ignore
			.then(async (res: any) => {
				debugger;
				let time_diff = await calculateTime(res.data.dt, res.data.timezone);
				let response = {
					tempture: `${convertTempKelvinToCentigrade(res.data.main.temp)}°C`,
					city: `${res.data.name}(${res.data.sys.country})`,
					time_diff: time_diff,
				};
				return response;
			})
			.catch((error) => {
				console.log("Error occurred: " + error);
			})
	);
}

// @ts-ignore
async function tempByGeolocation(latitude, longitude) {
	// @ts-ignore
	let data = JSON.stringify({
		longitude: longitude,
		latitude: latitude,
	});
	let config = {
		method: "post",
		url: "/weather/",
		headers: {
			"Content-Type": "application/json",
		},
		data: data,
	};
	debugger;
	return axios(config)
		.then(async (res: any) => {
			let time_diff = await calculateTime(res.data.dt, res.data.timezone);
			let response = {
				tempture: `${convertTempKelvinToCentigrade(res.data.main.temp)}°C`,
				city: `${res.data.name}(${res.data.sys.country})`,
				time_diff: time_diff,
			};
			return response;
		})
		.catch((error) => {
			console.log("Error occurred: " + error);
		});
}

export default {
	tempByGeolocation,
	tempByCity,
};
