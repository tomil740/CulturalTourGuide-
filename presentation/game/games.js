import repository from '../../domain/repository.js'
import MatchingGame from './matchingGame.js'

class Games{
    #matchingGameRef

    constructor(){
        this.#matchingGameRef = this.matchingGame();
    }

    get matchingGameRef(){ 
        return this.#matchingGameRef;
    }

    set matchingGameRef(arg){
        this.#matchingGameRef = arg;
    }

    matchingGame(){
        repository.getMatchingGameData().then((a)=>

            this.matchingGameRef = new MatchingGame(a)
        
        );
    }
}


const games = new Games();
export default games;
