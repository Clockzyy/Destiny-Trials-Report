import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import store from "store";

import {formatNumber} from "helpers";

@observer
export default class Weapons extends React.Component {
    constructor() {
        super();
    }
    render() {
        const className = cx("base")
        if(store.destiny.weekStats){
            const {weapons} = store.destiny.weekStats;
            const {matches: totalMatches, players: totalPlayers, weaponKills: totalKills} = store.destiny.weekStats;
            const weaponsTable = Object.values(weapons)
                .reduce((acc, array) => acc.concat(array.slice()), [])
                .sort(({kills: a}, {kills: b})=>{
                    return b-a;
                })
                .slice(0, 10)
                .map(({icon, name, kills, matches}, i)=>{
                return (
                    <tr key={i}>
                        <td><img src={"https://www.bungie.net"+icon} alt=""/> {name}</td>
                        <td>{formatNumber(kills)}</td>
                        <td>{Math.round((kills/totalKills)*100)+"%"}</td>
                        <td className="matches">{formatNumber(matches)}</td>
                        <td className="matchesPercentage">{Math.round((matches/totalMatches)*100)+"%"}</td>
                    </tr>
                )
            });



            return (
                <div className={className}>
                    <p className="title">Top Weapons</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Kills</th>
                                <th></th>
                                <th className="matches">Matches</th>
                                <th className="matchesPercentage"></th>
                            </tr>
                            {weaponsTable}
                        </tbody>
                    </table>
                </div>
            );
        }
        else return null
    }
}
