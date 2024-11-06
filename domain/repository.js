//import Server dao/
import DestinationPrev from './models/DestinationPrev.js';
import { serverDao } from '../data/serverDao.js';
import CardItem from './models/CardItem.js';
import Destination from './models/Destination.js';
import MatchingCards from './models/MatchingCards.js';

class Repository {
  constructor() {}

  saveCurrentDesId(theId) {
    localStorage.setItem('currentDesId', theId);
  }

  getCurrentDesId() {
    const res = localStorage.getItem('currentDesId');
    if (res == null) {
      return -1;
    }
    return res;
  }

  getAllDestinationPrev() {
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

  getCurrentDestination() {
    return new Promise((resolve, reject) => {
      const theId = this.getCurrentDesId();
      serverDao.getDestinationById(theId).then((data) => {
        resolve(new Destination(data));
      });
    });
  }

  getMatchingGameData() {
    return new Promise((resolve, reject) => {
      const currentDes = this.getCurrentDesId();
      console.log('picked ', currentDes);

      serverDao.getDestinationGameById(currentDes).then((theData) => {
        const a = theData.gameData;
        const pileA = [];
        const pileB = [];
        for (let itemIndex = 0; itemIndex < a.length; itemIndex++) {
          pileA.push(new CardItem(itemIndex, a[itemIndex].image, a[itemIndex].nameInArabic));
          pileB.push(new CardItem(itemIndex, a[itemIndex].image, a[itemIndex].nameInHebrew));
        }
        const gameId = theData.destenationId;

        resolve([new MatchingCards(pileA, pileB), gameId]);
      });
    });
  }
}

const repository = new Repository();
export default repository;
