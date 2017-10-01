import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import * as styles from "./styles";
let cx = classNames.bind(styles);

import WeekReport from "containers/WeekReport";

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        // const {router} = store;
        // const {params: {genre}} = router;

        const className = cx("base")
        return (
            <div className={className}>
                <WeekReport/>
            </div>
        );
    }
}
