import React from "react";
import PropTypes from "prop-types";
import {observer} from "mobx-react";

import classNames from "classnames/bind";
import * as styles from "./styles";
let cx = classNames.bind(styles);

import store from "store";
import LoadingScreen from "containers/LoadingScreen";
import WeekReport from "containers/WeekReport";
// import Navbar from "containers/Navbar";
@observer
export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        // const {router} = store;
        // const {params: {genre}} = router;

        const className = cx("base")

        if(store.ui.loading){
            return <LoadingScreen/>
        }else{
            return (
                <div className={className}>
                    {/* <Navbar/> */}
                    <WeekReport/>
                </div>
            );
        }
    }
}
