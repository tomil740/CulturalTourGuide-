import destinationDrawData from './destinationDrawData.js';
import repository from '../../domain/repository.js';

class Destination {
  #drawObj;
  constructor() {
    repository.getCurrentDestination().then((data) => {
      this.setdrawObj(new destinationDrawData(data, this.onStartGame));
    });
  }

  setdrawObj(theObj) {
    this.#drawObj = theObj;
  }
  get drawObj() {
    return this.#drawObj;
  }

  onStartGame() {
    window.location.href = '../game/matchingGame.html';
  }
}

const mockDestination = {
  _id: '123',
  city: 'Test City',
  population: 1000000,
  imgUrls: ['https://example.com/image.jpg'],
  summary: 'This is a test city used for testing purposes.',
  category: ['testCategory1', 'testCategory2'],
  loc: { lat: 40.7128, lng: -74.006 },
};

const destination = new Destination();
destination;
