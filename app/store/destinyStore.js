import {computed, observable, reaction, action} from "mobx";

import {createClient} from "contentful";

const fetchObject = {
    headers:{
        "X-APi-Key": "0ab13266b7ef43c18150619c573bf608"
    }
}

export default class contentfulStore{
    constructor(){
        fetch("https://www.bungie.net/Platform/Destiny2/Milestones/4253138191/Content", fetchObject)
            .then(response=>{
                return response.json();
            }).then((response)=>{
                console.log(response);
            }).catch(ex=>{
                console.error(ex);
            });
    }

    // @observable reviews = null;
    // @observable teamMembers = null;
    // @observable portfolioItemCategories = null;
    // @observable portfolioItems = null;
    //
    // fetchEverything(){
    //     this.fetchReviews();
    //     this.fetchTeamMembers();
    //     this.fetchPortfolioItemCategories();
    //     this.fetchPortfolioItems();
    // }
    //
    // @action fetchReviews(){
    //     return this.client.getEntries({
    //         "content_type": "review"
    //     }).then(({items})=>{
    //         this.reviews = items;
    //     })
    // }
    // @action fetchTeamMembers(){
    //     return this.client.getEntries({
    //         "content_type": "teamMember"
    //     }).then(({items})=>{
    //         this.teamMembers = items;
    //     })
    // }
    // @action fetchPortfolioItemCategories(){
    //     return this.client.getEntries({
    //         "content_type": "portfolioItemCategory"
    //     }).then(({items})=>{
    //         this.portfolioItemCategories = items;
    //     })
    // }
    // @action fetchPortfolioItems(){
    //     return this.client.getEntries({
    //         "content_type": "portfolioItem"
    //     }).then(({items})=>{
    //         this.portfolioItems = items;
    //     })
    // }
}
