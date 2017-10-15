import React from "react";
import {Route} from "mobx-router";
import Home from "views/Home";
import Search from "views/Search";

const views = {
    home: new Route({
        path: "/",
        component: <Home/>
    }),
    // search: new Route({
    //     path: "/search/:type/:name",
    //     component: <Search/>
    // })

}
export default views;
