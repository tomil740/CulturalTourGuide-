import destinationDrawData from "./destinationDrawData.js";
import repository from "../../domain/repository.js";

class Destination {
  #drawObj;
  constructor() {
    console.log("running");

    // get the curren destination
    const currentDest = repository.getCurrentDestination();
    this.#drawObj = new destinationDrawData(currentDest);
  }
}

const destination = new Destination();
destination;
