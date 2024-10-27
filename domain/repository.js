//import Server dao/
import DestinationPrev from './models/DestinationPrev.js'

class Repository{
    #currentDdestinationId;

    constructor(){
        //this.serverDao = 
    }

    set currentDdestinationId(des){
        this.#currentDdestinationId = des;
    }
    get currentDdestinationId(){
        return this.#currentDdestinationId;
    }

    /*
    will get the matcehd data from our server dao through the api
        * convert it into the matched domain objects
        * and return it 
    */
    getAllDestinationPrev(){
        //demo data
        const a =  [{id:1,name:"jerusalem",image:"https://t4.ftcdn.net/jpg/06/01/54/75/360_F_601547536_E7ovUzbSUOCnoodB9At0wWnyzpUlgnwf.jpg"},{id:2,name:"tel aviv"},{id:3,name:"haifa"}]
        const theLst = [];
        for(let item of a){
            theLst.push(

                new DestinationPrev(item.id,item.name,item.image)
            );
        }
        return theLst;
    }

    /*
    will get the matcehd data from our server dao through the api
        * convert it into the matched domain objects
        * and return it 
    */
    getCurrentDestination(){
        const a =  [{id:1,name:"jerusalem",image:"https://t4.ftcdn.net/jpg/06/01/54/75/360_F_601547536_E7ovUzbSUOCnoodB9At0wWnyzpUlgnwf.jpg"},{id:2,name:"tel aviv"},{id:3,name:"haifa"}]
        for(let item of a){
            if(item.id == this.#currentDdestinationId){
                return item;
            }
        }
    }

    /*
    arguments : gameId 
    return value : matcehd question collection
    */
    getDestinationGameById(gameId){

    }
}

const repository = new Repository();
export default repository;
