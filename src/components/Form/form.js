import React, { Component } from "react";
import "./form.css";

export default class Info extends Component {

    render() {
        return (
            <div className="form">
                <form className="from__body" onSubmit={this.props.weatherMethod}>
                    <div className="form__row">
                        <input className="form__input" type="text" name="city" placeholder="Type the city you live in" />
                        <button className="form__btn fa fa-search"></button>
                    </div>
                </form>
            </div>
        );
    }
}