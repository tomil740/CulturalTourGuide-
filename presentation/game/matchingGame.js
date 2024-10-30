
import drawMatchingGame from "./drawMatchingGame.js";
import games from "./games.js";
import MatchingCards from "../../domain/models/MatchingCards.js";

class MatchingGame{
    #deck;
    #openCardId;
    #openPairs;
    #sumOfPile;
    #matchedCards;

    constructor(gameCards){
        this.ogDeck = gameCards;
        this.#deck = gameCards;
        this.#openCardId = -1;
        this.#openPairs = 0;  
        this.#sumOfPile = this.#deck.pileA.length;
        this.#matchedCards = new Set();
        drawMatchingGame.initalizeDefMenu(this.initalizeDeck);     
        for(let index = 0; index < this.sumOfPile; index++){
          drawMatchingGame.drawCard(this.deck.pileA[index],"typeA",this.onUserPick);
          drawMatchingGame.drawCard(this.deck.pileB[index],"typeB",this.onUserPick);
      }   
    }
 
    get deck(){
        return this.#deck;
    }
    set deck(aDeck) {
      this.#deck = aDeck;
    }


  get sumOfPile() {
    return this.#sumOfPile;
  }

  set sumOfPile(crdsLevel) {
    this.#sumOfPile = crdsLevel;
  }

  get matchedCards() {
    return this.#matchedCards;
  }
  set matchedCards(matchedCards) {
    this.#matchedCards =matchedCards;
  }


  get openCardId() {
    return this.#openCardId;
  }

  set openCardId(cardId) {
    this.#openCardId = cardId;
  }

  get openPairs() {
    return this.#openPairs;
  }

  set openPairs(openPairs) {
    this.#openPairs = openPairs;
  }

  /*
        - shuffle the pile
        - draw the pile on the screen 
    */

initalizeDeck(crdsLevel){
  //get game ref 
        const matchedGameRef = games.matchingGameRef;
        matchedGameRef.initGameData(crdsLevel);

        const aRandomLst = matchedGameRef.getListRandomIndex(matchedGameRef.deck.pileA);
        const bRandomLst = matchedGameRef.getListRandomIndex(matchedGameRef.deck.pileA);
        //need to clean the UI table before start
        drawMatchingGame.cleanUiGameDeck();

        for(let index = 0; index < aRandomLst.length; index++){
            drawMatchingGame.drawCard(matchedGameRef.deck.pileA[aRandomLst[index]],"typeA",matchedGameRef.onUserPick);
            drawMatchingGame.drawCard(matchedGameRef.deck.pileB[bRandomLst[index]],"typeB",matchedGameRef.onUserPick);
        }
} 

/*
initGameData:
  * will generate matcehd level object data and restart all of the properties.
*/
  initGameData(crdsLevel){
    const matchedGameRef = games.matchingGameRef;

    const pileA = [];
    const pileB = [];

    for(let theIndex = 0; theIndex < crdsLevel; theIndex++){
      pileA.push(matchedGameRef.ogDeck.pileA[theIndex]);
      pileB.push(matchedGameRef.ogDeck.pileB[theIndex]);
    }
      const a = new MatchingCards(pileA,pileB);
      matchedGameRef.deck = a;
      matchedGameRef.openCardId = -1;
      matchedGameRef.openPairs = 0;  
      matchedGameRef.sumOfPile = matchedGameRef.deck.pileA.length;
      matchedGameRef.matchedCards = new Set();
   
  }


  getListRandomIndex(fullCollection){
    //get the index list to mix
    let randomLst = [];
    for(let num = 0; num < fullCollection.length; num++){
      randomLst.push(num);
    }
    const res = [];
    for(let resItem = 0; res.length < fullCollection.length; resItem++){
      const a = Math.floor(Math.random() * randomLst.length);
      res.push(randomLst[a]);
      const r = randomLst.slice(0,a);
      randomLst = r.concat(randomLst.slice(a+1));
    }
    return res;

  }

  onUserPick(theCardId) {
    const matchedGameRef = games.matchingGameRef;
    /*
            for our Html we use the full typed id,for this function we will cut the type...
            that is useful to:
            * find when the user click on the same card by "&& (theCardId!=matchedGameRef.openCardId)"
            * and from the other hand find matches with the other option
        */

    // Check if the card is already matched

    if (matchedGameRef.matchedCards.has(theCardId)) {
      return;
    }

    // Check if the card is already open
    if (matchedGameRef.openCardId === theCardId) {
      return;
    }

    // cardId => argCardId
    const argCardId = theCardId.slice(0, theCardId.length - 1);

    drawMatchingGame.exposeCard(theCardId);

    if (matchedGameRef.openCardId !== -1) {
      const prevCardId = matchedGameRef.openCardId.slice(0, matchedGameRef.openCardId.length - 1);
      console.log(prevCardId, argCardId);
      if (prevCardId === argCardId) {
        console.log('Matched!');
        matchedGameRef.openPairs++;
        matchedGameRef.matchedCards.add(theCardId);
        matchedGameRef.matchedCards.add(matchedGameRef.openCardId);
        console.log(matchedGameRef.openPairs);
        matchedGameRef.openCardId = -1;
        /*
        if(matchedGameRef.openCardId != -1){
            const prevCardId =  matchedGameRef.openCardId.slice(0, matchedGameRef.openCardId.length-1); 
            if(prevCardId == argCardId && (theCardId!=matchedGameRef.openCardId)){
                matchedGameRef.openPairs++;
                drawMatchingGame.onPair(theCardId,matchedGameRef.openCardId);
                matchedGameRef.openCardId = -1;
                */

        matchedGameRef.isCompleted();
      } else {
        setTimeout(() => {
          drawMatchingGame.exposeCard(theCardId);
          drawMatchingGame.exposeCard(matchedGameRef.openCardId);
          matchedGameRef.openCardId = -1;
        }, 1000);
      }
    } else {
      matchedGameRef.openCardId = theCardId;
    }
  }

  isCompleted() {
    const matchedGameRef = games.matchingGameRef;
    const progress = matchedGameRef.openPairs / matchedGameRef.sumOfPile;

    if (matchedGameRef.openPairs === matchedGameRef.sumOfPile) {
      console.log('Game Completed!');

      const overlay = document.createElement('section');
      overlay.classList.add('game-completed');

      const messageContainer = document.createElement('section');
      messageContainer.classList.add('completion-message');

      messageContainer.innerHTML = `
                <h1>Congratulations!</h1>
                <p>You've matched all pairs!</p>
            `;

      const playAgainButton = document.createElement('button');
      playAgainButton.classList.add('play-again-btn');
      playAgainButton.textContent = 'Play Again';
      playAgainButton.addEventListener('click', () => {
        document.querySelector('body main section article#gameSection').removeChild(overlay);
        document.querySelectorAll('.confetti').forEach((confetti) => confetti.remove());
        location.reload();
      });

      messageContainer.appendChild(playAgainButton);
      overlay.appendChild(messageContainer);
      document.querySelector('body main section article#gameSection').appendChild(overlay);

      this.#showConfetti();

      //to precentages
      drawMatchingGame.updateProgBar(100);
      ////finesh...
    } else {
      drawMatchingGame.updateProgBar(progress * 100);
    }
  }

  // Confetti effect function
  #showConfetti() {
    const confettiColors = ['DodgerBlue', 'Gold', 'SlateBlue', 'LightBlue', 'Violet', 'SteelBlue', 'SandyBrown', 'Crimson'];

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('section');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      document.querySelector('body main section article#gameSection').appendChild(confetti);
    }
  }
}

export default MatchingGame;
