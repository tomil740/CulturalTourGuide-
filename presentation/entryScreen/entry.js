import entryDrawData from "./entryDrawData.js";
import repository from "../../domain/repository.js";

class Entry{
    constructor(){
        const a = repository.getAllDestinationPrev();
        entryDrawData.drawListMenu(a);
    }

    onDdestinationPick(desId){
        repository.currentDdestination = desId;
    }
}
const entry = new Entry();
entry

