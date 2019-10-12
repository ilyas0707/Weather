import React, { Component } from "react";
import "./weather.css";

export default class Weather extends Component {

    render() {
        return (
            <div className="weather">
                { this.props.city &&
                <div>
                    <p className="weather__row">Location: { this.props.city }, { this.props.country }</p>
                    <p className="weather__row">Temperature: { this.props.temp } C'</p>
                    <p className="weather__row">Humidity: { this.props.humidity }%</p>
                    <p className="weather__row">Pressure: { this.props.pressure } hPa</p>
                    <p className="weather__row">Weather: { this.props.weather }</p>
                </div>
                }
                <p className="weather__row">{ this.props.error }</p>
            </div>
        );
    }
}