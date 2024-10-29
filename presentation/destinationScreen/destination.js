import destinationDrawData from "./destinationDrawData.js";
import repository from "../../domain/repository.js";

class Destination {
  #drawObj;
  constructor() {
    console.log("running");
    const a = repository.getCurrentDestination();
    this.#drawObj = new destinationDrawData(a);
  }
}

const mockObject = `{
  "_id": "123",
  "city": "Jerusalem",
  "population": 8000000,
  "imgUrls": ["https://t4.ftcdn.net/jpg/06/01/54/75/360_F_601547536_E7ovUzbSUOCnoodB9At0wWnyzpUlgnwf.jpg"],
  "summary": "test test",
  "category": ["rests", "hotels"],
  "loc": {
    "lat": -156.6917,
    "lan": 20.93792
  }`;

const destination = new Destination(mockObject);
destination;
