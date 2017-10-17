import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import * as styles from "./styles";
let cx = classNames.bind(styles);

import store from "store";
import Navbar from "containers/Navbar";
import views from "store/views";

@observer
export default class Search extends React.Component {
    constructor() {
        super();
        const router = store.router;
        const {type, name} = router.params;
        store.destiny.getFireteam(type, name)
    }

    render() {
        const className = cx("base")
        return (
            <div className={className}>
                <Navbar/>
                <button onClick={()=>{
                    store.router.goTo(views.home);
                }}>Go home</button>
            </div>
        );
    }
}
