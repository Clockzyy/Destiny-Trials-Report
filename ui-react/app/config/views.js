import React from "react";

import {Route} from "mobx-router";

import Home from "views/Home";

import store from "store";

export class Views{
    home = new Route({
        path: "/",
        component: <Home/>
    })
}

const singleton = new Views();
export default singleton;
