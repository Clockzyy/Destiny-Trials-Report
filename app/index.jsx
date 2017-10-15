import React from 'react';
import ReactDOM from 'react-dom';

import {MobxRouter} from "mobx-router";
import store from "store";

import styles from "sass/global";

ReactDOM.render(<MobxRouter store={store}/>, document.getElementById('app'));
