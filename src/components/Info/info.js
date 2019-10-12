import React, { Component } from "react";
import "./info.css";

export default class Info extends Component {

    render() {
        return (
            <div className="info">
                <h2 className="info__heading">Weather App</h2>
                <p className="info__txt">Know about the weather in your city</p>
            </div>
        );
    }

}