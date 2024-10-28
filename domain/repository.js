//import Server dao/
import DestinationPrev from './models/DestinationPrev.js'
import { serverDao } from '../data/serverDao.js';
import CardItem from './models/CardItem.js';
import MatchingCards from './models/MatchingCards.js'

class Repository{

    constructor(){
        //this.serverDao = 
    }

    saveCurrentDesId(theId){
        localStorage.setItem("currentDesId",theId);
    }

    getCurrentDesId(){
        const res = localStorage.getItem("currentDesId");
        if(res == null){
            return -1;
        }
        return res;
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

    getMatchingGameData(){
        //pull from the api the matched data according to our picked destination id;
        const theData = [
            {
                "image": "https://images.pexels.com/photos/1051074/pexels-photo-1051074.jpeg",
                "nameInArabic": "القدس القديمة",
                "nameInHebrew": "העיר העתיקה"
            },
            {
                "image": "https://images.pexels.com/photos/2086304/pexels-photo-2086304.jpeg",
                "nameInArabic": "حائط البراق",
                "nameInHebrew": "הכותל המערבי"
            },
            {
                "image": "https://images.pexels.com/photos/1631031/pexels-photo-1631031.jpeg",
                "nameInArabic": "قبة الصخرة",
                "nameInHebrew": "כיפת הסלע"
            },
            {
                "image": "https://images.pexels.com/photos/2432466/pexels-photo-2432466.jpeg",
                "nameInArabic": "المسجد الأقصى",
                "nameInHebrew": "מסגד אל-אקצא"
            },
            {
                "image": "https://images.pexels.com/photos/1863025/pexels-photo-1863025.jpeg",
                "nameInArabic": "سوق القدس",
                "nameInHebrew": "שוק ירושלים"
            },
            {
                "image": "https://images.pexels.com/photos/2218838/pexels-photo-2218838.jpeg",
                "nameInArabic": "المأكولات المقدسية",
                "nameInHebrew": "מאכלים ירושלמיי"
            }]
            const a = theData;
        
        //pull from the api the matched data according to our picked destination id;
        const pileA = [];
        const pileB = [];
        for(let itemIndex = 0; itemIndex < a.length; itemIndex++){
            pileA.push(
                new CardItem(itemIndex,a[itemIndex].image,a[itemIndex].nameInArabic)
            );
            pileB.push(
                new CardItem(itemIndex,a[itemIndex].image,a[itemIndex].nameInHebrew)
            );
        }

        return new MatchingCards(pileA,pileB);
    }
}

const repository = new Repository();
export default repository;
