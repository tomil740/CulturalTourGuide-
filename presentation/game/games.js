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

    matchingGame(){
        const a = repository.getMatchingGameData();
        return new MatchingGame(a);
    }
}


const games = new Games();
export default games;
