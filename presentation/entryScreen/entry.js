import entryDrawData from "./entryDrawData.js";
import repository from "../../domain/repository.js";

class Entry{
    constructor(){
        const a = repository.getAllDestinationPrev();
        entryDrawData.drawListMenu(a,this.onDdestinationPick);
    }

    onDdestinationPick(desId){ 
        repository.saveCurrentDesId(desId);
        window.location.href = '../game/game.html';
    }
}
const entry = new Entry();
entry



