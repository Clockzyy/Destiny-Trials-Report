import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import store from "store";

import {formatNumber} from "helpers";

@observer
export default class Totals extends React.Component {
    constructor() {
        super();
    }
    render() {
        const className = cx("base")
        if(store.destiny.weekStats){
            // console.log(store.dest)
            const {matches, players, weaponKills, kills: totalKills} = store.destiny.weekStats;

            return (
                <div className={className}>
                    <p className="title">Totals</p>
                    <div>
                        <p>{formatNumber(matches)}</p>
                        <sub>Matches</sub>
                    </div>
                    <div>
                        <p>{formatNumber(players)}</p>
                        <sub>Players</sub>
                    </div>
                    <div>
                        <p>{formatNumber(totalKills)}</p>
                        <sub>Total Kills</sub>
                    </div>
                    <div>
                        <p>{formatNumber(weaponKills)}</p>
                        <sub>Weapon Kills</sub>
                    </div>
                </div>
            );
        }
        return null
    }
}
