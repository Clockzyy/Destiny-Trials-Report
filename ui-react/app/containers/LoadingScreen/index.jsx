import React from "react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import Loader from "components/Loader";

export default class LoadingScreen extends React.Component {
    constructor() {
        super();
    }
    render() {
        const className = cx("base")
        return (
            <div className={className}>
                <Loader/>
            </div>
        );
    }
}
