import destinationDrawData from "./destinationDrawData.js";
import repository from "../../domain/repository.js";

class Destination {
  #drawObj;
  constructor() {
    repository.getCurrentDestination().then(
      (data)=>{
        this.setdrawObj(new destinationDrawData(data,this.onStartGame)
      )}
    );
  }

  setdrawObj(theObj){
    this.#drawObj = theObj; 
  }
  get drawObj(){
    return this.#drawObj;
  }

  onStartGame(){
    window.location.href = '../game/game.html';
  }
}
const destination = new Destination();
destination;
