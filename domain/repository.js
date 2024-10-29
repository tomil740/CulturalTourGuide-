//import Server dao/
import DestinationPrev from "./models/DestinationPrev.js";
import { serverDao } from "../data/serverDao.js";
import CardItem from "./models/CardItem.js";
import Destination from "./models/Destination.js";
import MatchingCards from "./models/MatchingCards.js";

class Repository {
  constructor() {
    //this.serverDao =
    // const a =  serverDao.getDestinationById(123);
    //a.then((data)=>console.log(data));
  }

  saveCurrentDesId(theId) {
    localStorage.setItem("currentDesId", theId);
  }

  getCurrentDesId() {
    const res = localStorage.getItem("currentDesId");
    if (res == null) {
      return -1;
    }
    return res;
  }

  /*
    will get the matcehd data from our server dao through the api
        * convert it into the matched domain objects
        * and return it 
    */
  getAllDestinationPrev() {
    //demo data
    return new Promise((resolve, reject) => {
      serverDao.getAllDestinationPrev().then((theLst) => {
        const res = [];
        for (let item of theLst) {
          res.push(new DestinationPrev(item.id, item.name, item.image));
        }
        resolve(res);
      });
    });
  }

  /*
    will get the matcehd data from our server dao through the api
        * convert it into the matched domain objects
        * and return it 
    */
  getCurrentDestination() {
    return new Promise((resolve, reject) => {
      const theId = this.getCurrentDesId();
      serverDao.getDestinationById(theId).then((data) => {
        resolve(new Destination(data.des));
      });
    });
  }

  getMatchingGameData() {
    return new Promise((resolve, reject) => {
      //get the current des
      const currentDes = this.getCurrentDesId();
      console.log("picked ", currentDes);
      //pull from the api the matched data according to our picked destination id;
      // const theData =
      // const a = theData;

      //pull from the api the matched data according to our picked destination id;

      serverDao.getDestinationGameById(currentDes).then((theData) => {
        const a = theData[0].gameData;
        const pileA = [];
        const pileB = [];
        for (let itemIndex = 0; itemIndex < a.length; itemIndex++) {
          pileA.push(
            new CardItem(
              itemIndex,
              a[itemIndex].image,
              a[itemIndex].nameInArabic
            )
          );
          pileB.push(
            new CardItem(
              itemIndex,
              a[itemIndex].image,
              a[itemIndex].nameInHebrew
            )
          );
        }

        resolve(new MatchingCards(pileA, pileB));
      });
    });
  }
}

const repository = new Repository();
export default repository;
