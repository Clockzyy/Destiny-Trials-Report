import React from "react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

const Loader = () => {
    const className = cx("base")
    return (
        <div className={className}>

        </div>
    );
}

export default Loader;
