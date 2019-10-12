import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Info from "./components/Info/info";
import Form from "./components/Form/form";
import Weather from "./components/Weather/weather";

const API_KEY = "8c4b79047d3ee6e058c53a3a6931e1a6";

export default class App extends Component {

	state = {
		data: [],
		temp: undefined,
		humidity: undefined,
		pressure: undefined,
		city: undefined,
		country: undefined,
		weather: undefined,
		error: undefined
	}

	gettingWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value
		if (city) {
			await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
			.then(res => {
				const data = res.data;
				this.setState({ data });
				console.log(data);

			this.setState({
				temp: data.main.temp,
				humidity: data.main.humidity,
				pressure: data.main.pressure,
				city: data.name,
				country: data.sys.country,
				weather: data.weather[0].description,
				error: ""
			});
		})
		}else{
			this.setState({
				temp: undefined,
				humidity: undefined,
				pressure: undefined,
				city: undefined,
				country: undefined,
				weather: undefined,
				error: "Type the city you live in!"
			});
		}
	}
	
	render() {
		return (
			<div className="wrapper">
				<Info />
				<div className="result">
					<Form weatherMethod={this.gettingWeather} />
					<Weather 
						temp={this.state.temp}
						humidity={this.state.humidity}
						pressure={this.state.pressure}
						city={this.state.city}
						country={this.state.country}
						weather={this.state.weather}
						error={this.state.error}
					/>
				</div>
			</div>
		);
	}

}