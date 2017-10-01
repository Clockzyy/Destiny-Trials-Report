import React from "react";
import {observer} from "mobx-react";
import PropTypes from "prop-types";

import classNamesBind from "classnames/bind";
import * as styles from "./styles";
let cx = classNamesBind.bind(styles);

import store from "store";

@observer
export default class WeekReport extends React.Component {
    constructor() {
        super();
    }

    // renderPortfolioItems(){
    //     const {portfolioItems} = store.contentful
    //     return (portfolioItems) ? portfolioItems.map(({fields: {information, title, category: {fields: {category}}, image: {fields: {file: {url: image}}}}}) => {
    //         return (
    //             <PortfolioItem information={information} title={title} category={category} image={image}/>
    //         )
    //     }) : undefined;
    // }

    render() {
        const className = cx("base")
        return (
            <div className={className}>

            </div>
        );
    }
}
