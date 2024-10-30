import drawMatchingGame from './drawMatchingGame.js';
import games from './games.js';

class MatchingGame {
  #deck;
  #openCardId;
  #openPairs;
  #sumOfPile;
  #matchedCards;

  constructor(gameCards) {
    this.#deck = gameCards;
    this.#openCardId = -1;
    this.#openPairs = 0;
    this.#sumOfPile = this.#deck.pileA.length;
    this.#matchedCards = new Set();

    this.initalizeDeck();
  }

  get deck() {
    return this.#deck;
  }

  get sumOfPile() {
    return this.#sumOfPile;
  }

  set sumOfPile(crdsLevel) {}

  get matchedCards() {
    return this.#matchedCards;
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

  initalizeDeck(crdsLevel) {
    //get game ref
    const matchedGameRef = games.matchingGameRef;

    //need to clean the UI table before start
    drawMatchingGame.cleanUiGameDeck();
    for (let counter = 0; counter < this.#sumOfPile; counter++) {
      drawMatchingGame.drawCard(this.deck.pileA[counter], 'typeA', this.onUserPick);
      drawMatchingGame.drawCard(this.deck.pileB[this.sumOfPile - 1 - counter], 'typeB', this.onUserPick);
    }
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
