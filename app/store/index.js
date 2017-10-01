import destinyStore from "./destinyStore";
import uiStore from "./uiStore";

export default {
    destiny: new destinyStore(),
    ui: new uiStore()
}
