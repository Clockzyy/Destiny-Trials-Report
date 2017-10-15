import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import store from "store";

import Totals from "./Totals";
import Weapons from "./Weapons";

export default class Stats extends React.Component {
    constructor() {
        super();
    }

    render() {
        const className = cx("base")
        return (
            <div className={className}>
                <Totals/>
                <hr/>
                <Weapons/>
            </div>
        );
    }
}
