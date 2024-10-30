import drawMatchingGame from "./drawMatchingGame.js";
import games from "./games.js";

class MatchingGame{
    #deck;
    #openCardId;
    #openPairs;
    #sumOfPile;
    constructor(gameCards){
        this.#deck = gameCards;
        this.#openCardId = -1;
        this.#openPairs = 0;  
        this.#sumOfPile = this.#deck.pileA.length;

        this.#initalizeDeck();
    }
 
    get sumOfPile(){
        return this.#sumOfPile;
    }

    /*
        - shuffle the pile
        - draw the pile on the screen 
    */
    #initalizeDeck(){
        for(let counter = 0; counter < this.#sumOfPile; counter++){
            drawMatchingGame.drawCard(this.#deck.pileA[counter],"typeA",this.onUserPick);
            drawMatchingGame.drawCard(this.#deck.pileB[(this.#sumOfPile-1)-counter],"typeB",this.onUserPick);
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

        if(matchedGameRef.#openCardId != -1){
            const prevCardId =  matchedGameRef.#openCardId.slice(0, matchedGameRef.#openCardId.length-1); 
            if(prevCardId === argCardId){
                console.log("Matched!");
                matchedGameRef.#openPairs++;
                console.log(matchedGameRef.#openPairs);
                matchedGameRef.#openCardId = -1;
                matchedGameRef.isCompleted();
            }else{
                drawMatchingGame.exposeCard(theCardId);
                drawMatchingGame.exposeCard(matchedGameRef.#openCardId);
                matchedGameRef.#openCardId = -1;
            }
        }else{
            matchedGameRef.#openCardId = theCardId;
        }
    }

    isCompleted() {
        const matchedGameRef = games.matchingGameRef;
    
        if (matchedGameRef.#openPairs === matchedGameRef.sumOfPile) {
            console.log("Game Completed!");
    
            const overlay = document.createElement("section");
            overlay.classList.add("game-completed");
    
            const messageContainer = document.createElement("section");
            messageContainer.classList.add("completion-message");
    
            messageContainer.innerHTML = `
                <h1>Congratulations!</h1>
                <p>You've matched all pairs!</p>
            `;
    
            const playAgainButton = document.createElement("button");
            playAgainButton.classList.add("play-again-btn");
            playAgainButton.textContent = "Play Again";
            playAgainButton.addEventListener("click", () => {
                document.querySelector(".matching-game").removeChild(overlay);
                document.querySelectorAll(".confetti").forEach(confetti => confetti.remove());
                location.reload(); 
            });
    
            messageContainer.appendChild(playAgainButton);
            overlay.appendChild(messageContainer);
            document.querySelector(".matching-game").appendChild(overlay);
    
            this.#showConfetti();
        }
    }

    // Confetti effect function
    #showConfetti() {
    const confettiColors = ["DodgerBlue","Gold","SlateBlue","LightBlue","Violet","SteelBlue","SandyBrown","Crimson"];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("section");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        document.querySelector(".matching-game").appendChild(confetti);
    }
}    
    
}

export default MatchingGame;