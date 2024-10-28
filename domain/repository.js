//import Server dao/
import DestinationPrev from './models/DestinationPrev.js';
import { serverDao } from '../data/serverDao.js';
import CardItem from './models/CardItem.js';
import MatchingCards from './models/MatchingCards.js'

class Repository {
  #currentDdestinationId;

  constructor() {
    //this.serverDao =
  }

  set currentDdestinationId(des) {
    this.#currentDdestinationId = des;
  }
  get currentDdestinationId() {
    return this.#currentDdestinationId;
  }

  /*
    will get the matcehd data from our server dao through the api
        * convert it into the matched domain objects
        * and return it 
    */
  getAllDestinationPrev() {
    //demo data
    const a = [
      { id: 1, name: 'Jerusalem', image: 'https://t4.ftcdn.net/jpg/06/01/54/75/360_F_601547536_E7ovUzbSUOCnoodB9At0wWnyzpUlgnwf.jpg' },
      {
        id: 2,
        name: 'Tel aviv- jaffa',
        image: 'https://plus.unsplash.com/premium_photo-1697730177654-75dfc22bc231?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        name: 'Haifa',
        image: 'https://images.unsplash.com/photo-1628405633956-385f623b767d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 4,
        name: 'Nazareth',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nazareth_Panorama_Dafna_Tal_IMOT_%2814532097313%29.jpg/800px-Nazareth_Panorama_Dafna_Tal_IMOT_%2814532097313%29.jpg',
      },
      {
        id: 5,
        name: 'Acre',
        image: 'https://images.unsplash.com/photo-1691071100985-72b022edee92?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        name: 'Ramla',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU8YSR8mnDerlaidRmEafFvcqi91Fb44o39RTYLl3VO2Qr9OiCBdadkJiAp4nabUy9yI&usqp=CAU',
      },
      {
        id: 6,
        name: 'Lod',
        image: 'https://www.streetsigns.co.il/Images/extra/c1749.jpg',
      },
    ];
    const theLst = [];
    for (let item of a) {
      theLst.push(new DestinationPrev(item.id, item.name, item.image));
    }
    return theLst;
  }

  /*
    will get the matcehd data from our server dao through the api
        * convert it into the matched domain objects
        * and return it 
    */
  getCurrentDestination() {
    const a = [
      { id: 1, name: 'jerusalem', image: 'https://t4.ftcdn.net/jpg/06/01/54/75/360_F_601547536_E7ovUzbSUOCnoodB9At0wWnyzpUlgnwf.jpg' },
      { id: 2, name: 'tel aviv' },
      { id: 3, name: 'haifa' },
    ];
    for (let item of a) {
      if (item.id == this.#currentDdestinationId) {
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
