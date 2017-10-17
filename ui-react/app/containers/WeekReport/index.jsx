import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import store from "store";

import Header from "containers/Header";
import Stats from "containers/Stats";

export default class WeekReport extends React.Component {
    constructor() {
        super();
    }

    render() {
        const className = cx("base")
        return (
            <div className={className}>
                <Header/>
                <Stats/>
            </div>
        );
    }
}
