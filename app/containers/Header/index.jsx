import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import store from "store";

@observer
export default class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        const className = cx("base")
        if(store.destiny.weekStats){
            const {image, mode, name} = store.destiny.weekStats;

            return (
                <div className={className}>
                    <img className="image" src={image}></img>
                    <div className="text">
                        <p className="this-week">This week</p>
                        <p className="info">{mode} <span>on</span> {name}</p>
                    </div>
                </div>
            );
        }
        return null
    }
}
