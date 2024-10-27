import destinationDrawData from "./destinationDrawData.js";
import repository from "../../domain/repository.js";

class Destination{
    #drawObj;
    constructor(){
        console.log("runnign")
        const a = repository.getCurrentDestination();
        this.#drawObj = new destinationDrawData(a);
    }

    
}
const destination = new Destination();
destination

