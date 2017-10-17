import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import store from "store";

import views from "store/views";

@observer
export default class Navbar extends React.Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "",
            type: 2
        }
    }
    handleInput(event){
        this.setState({name: event.target.value});
    }
    handleSelect(event){
        this.setState({type: event.target.value});
    }
    handleSubmit(event){
        store.router.goTo(views.search, {type: this.state.type, name: this.state.name})
        event.preventDefault();
    }

    render() {
        const className = cx("base")

        return (
            <div className={className}>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Search by gamertag" className="name-input" type="text" value={this.state.name} onChange={this.handleInput}/>
                    <select className="type-select" value={this.state.type} onChange={this.handleSelect}>
                        <option value={2}>PlayStation</option>
                        <option value={1}>XBox</option>
                        <option disabled>PC</option>
                    </select>
                    <button className="submit" type="submit" value="Submit"><i className="fa fa-search"/></button>
                </form>
            </div>
        );
    }
}
