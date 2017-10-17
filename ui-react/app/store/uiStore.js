import {computed, observable, reaction, action, observe} from "mobx";
import destinyStore from "./destinyStore";


export class UiStore{
    @observable loading = true

    constructor(){
        observe(destinyStore, ({name})=>{
            if(name == "weekStats"){
                // setTimeout(2000, ()=>{
                    this.loading = false;
                // })
            }
        })
    }
}

const singleton = new UiStore();
export default singleton;