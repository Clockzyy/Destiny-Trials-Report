import {computed, observable, reaction, action} from "mobx";

export default class uiStore{
    constructor(){
        this.showDiscordPopup = this.showDiscordPopup.bind(this);
        this.hideDiscordPopup = this.hideDiscordPopup.bind(this);
        this.showNavbar = this.showNavbar.bind(this);
        this.hideNavbar = this.hideNavbar.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    @observable isDiscordPopupOpen = false;
    @observable isNavbarOpen = false;

    @action showDiscordPopup(){
        this.isDiscordPopupOpen = true;
    }
    @action hideDiscordPopup(){
        this.isDiscordPopupOpen = false;
    }
    @action showNavbar(){
        this.isNavbarOpen = true;
    }
    @action hideNavbar(){
        this.isNavbarOpen = false;
    }
    @action toggleNavbar(){
        this.isNavbarOpen = !this.isNavbarOpen;
    }
}
