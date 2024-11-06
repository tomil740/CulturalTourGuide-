class ServerDao {
  constructor() {
    this.baseRout = 'http://localhost:3000';
  }

  getAllDestinationPrev() {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseRout}/destinationsPrev`).then((response) =>
        response.json().then((data) => {
          resolve(data);
        })
      );
    });
  }

  getDestinationById(theId) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseRout}/destinations/${theId}`).then((response) =>
        response.json().then((data) => {
          resolve(data);
        })
      );
    });
  }

  getDestinationGameById(theId) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseRout}/desGames/${theId}`).then((response) =>
        response.json().then((data) => {
          resolve(data);
        })
      );
    });
  }
}

export const serverDao = new ServerDao();
serverDao.getAllDestinationPrev();
