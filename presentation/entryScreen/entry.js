import entryDrawData from "./entryDrawData.js";
import repository from "../../domain/repository.js";

class Entry{
    constructor(){
        repository.getAllDestinationPrev().then((data)=>{
            entryDrawData.drawListMenu(data,this.onDdestinationPick);
        });
    }

    onDdestinationPick(desId){ 
        repository.saveCurrentDesId(desId);
        window.location.href = '../destinationScreen/destination.html';
    }
}
const entry = new Entry();
entry



