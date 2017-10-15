import destinyStore from "./destinyStore";
import uiStore from "./uiStore";
import {RouterStore, startRouter} from "mobx-router";
import views from "./views";

const store = {
    destiny: destinyStore,
    ui: uiStore,
    router: new RouterStore()
}
startRouter(views, store);
export default store;
