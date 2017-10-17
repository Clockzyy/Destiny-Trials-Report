import {computed, observable, reaction, action} from "mobx";

const apiKey = "0ab13266b7ef43c18150619c573bf608";

const fetchObj = {
    headers: {
        "X-API-Key": apiKey
    }
}

export class DestinyStore{
    constructor(){
        fetch("http://api.trialsofthenine.com/week/0")
            .then(response=>{
                return response.json();
            }).then((json)=>{
                if(json.Message == "Ok"){
                    const response = json.Response;
                    this.weekStats = {...response, image: "https://www.bungie.net"+response.image};
                } else {
                    console.error("Could not fetch week stats");
                }
            }).catch(ex=>{
                console.error(ex);
            });
        this.getDefinitions();
    }
    @observable definitions;
    @observable weekStats;
    @action async getDefinitions(){
        if(this.definitions){
            return this.definitions;
        }
        const definitions = await fetch("/api/destinyDefinitions")
            .then(response=> response.json())
            
        this.definitions = definitions;
        return definitions;
    }
    async getFireteam(type, name){
        try{
            const {Response: [player]} = await fetch(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${type}/${name}/`, fetchObj)
                .then(response=> response.json());

            const fireteam = await fetch(`https://api.trialsofthenine.com/player/${player.membershipId}/fireteam`)
                .then(response=> response.json());

            let fireteamMembers = fireteam.results.map(({membershipId})=> fetch(`https://www.bungie.net/Platform/Destiny2/${type}/Profile/${membershipId}/?components=100,205,302,200,304,306`, fetchObj).then(response=> response.json()));

            let results = [];
            for(let fireteamMember of fireteamMembers){
                const member = await fireteamMember
                results.push(member.Response);
            }

            console.log(results);

            const definitions = await this.getDefinitions();
            console.log(definitions);

            // const weapons = results.map(({characterEquipment: {data: weaponList}})=>{
            //     return Object.values(weaponList).map(({items})=>{
            //         return items.map((obj)=>{
            //             const def = definitions.items[obj.itemHash]
            //             return {...obj, name: def.n, description: def.d, type: def.t}
            //         });
            //     });
            // })
            // .map((player)=>{
            //     return player.map((character)=>{
            //         return character.filter(({bucketHash})=>{
            //             switch(bucketHash){
            //                 case 1498876634:
            //                 case 2465295065:
            //                 case 953998645:
            //                     return true;
            //                     break;
            //             }
            //         });
            //     });
            // });
            // console.log(weapons);

            return results.map(({Response}, i)=> {return {...Response, ...fireteam.results[i]}});
        } catch(error){
            console.error(error);
        }
    }
}

const singleton = new DestinyStore();
export default singleton;