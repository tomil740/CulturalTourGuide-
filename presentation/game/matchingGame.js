import drawMatchingGame from "./drawMatchingGame.js";
import games from "./games.js";

class MatchingGame{
    deck;
    openCardId;
    openPairs;
    sumOfPile;
    constructor(gameCards){
        this.deck = gameCards;
        this.openCardId = -1;
        this.openPairs = 0;  
        this.sumOfPile = this.deck.pileA.length;

        this.#initalizeDeck();
    }
 
    get sumOfPile(){
        this.sumOfPile;
    }

    /*
        - shful the pail
        - draw the pile on the screen 
    */
    #initalizeDeck(){
        for(let counter = 0; counter < this.sumOfPile; counter++){
            drawMatchingGame.drawCard(this.deck.pileA[counter],"typeA",this.onUserPick);
            drawMatchingGame.drawCard(this.deck.pileB[(this.sumOfPile-1)-counter],"typeB",this.onUserPick);
        }
    }

    onUserPick(theCardId){
        const matchedGameRef = games.matchingGameRef;
        /*
            for our Html we use the full typed id,for this function we will cut the type...
        */
       //cardId  => argCardId
        const argCardId = theCardId.slice(0,theCardId.length-1);

        drawMatchingGame.exposeCard(theCardId);

        if(matchedGameRef.openCardId != -1){
            const prevCardId =  matchedGameRef.openCardId.slice(0, matchedGameRef.openCardId.length-1); 
            if(prevCardId == argCardId){
                matchedGameRef.openPairs++;
                matchedGameRef.openCardId = -1;
                matchedGameRef.isCompleted();
            }else{
                drawMatchingGame.exposeCard(theCardId);
                drawMatchingGame.exposeCard(matchedGameRef.openCardId);
                matchedGameRef.openCardId = -1;
            }
        }else{
            matchedGameRef.openCardId = theCardId;
        }
    }

    isCompleted(){
        const matchedGameRef = games.matchingGameRef;

        if(matchedGameRef.openPairs == matchedGameRef.sumOfPile){
            console.log("matched");
            ////finesh...
        }
    }
}

export default MatchingGame;