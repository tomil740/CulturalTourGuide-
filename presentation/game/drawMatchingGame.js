import util from './util/util.js';

class DrawMatchingGame {
  constructor() {}

  drawHeader(topicName, randomImg) {
    const theName = util.getDesNameById(topicName);
    const header = document.querySelector('body header div');
    const theEle = document.createElement('div');
    theEle.classList.add('topicHeader');
    theEle.innerHTML = `
            <img src="${randomImg}">
            <h2>${theName}</h2>
         `;
    header.appendChild(theEle);
  }

  initalizeDefMenu(onDeficulatyPick) {
    const topicName = util.getDesNameById();

    const theContanier = document.querySelector('body section.game-info');
    const theEle = document.createElement('div');
    theEle.id = 'difficultyMenu';
    theEle.innerHTML = `
        <a id="difficultyLev">Difficulty level: <strong> Hard</strong></a>
            <ul class="DropDwonMenu">
                <li href="#">Easy</li>
                <li href="#">intermediate</li>
                <li href="#">Hard</li>
            </ul>
            `;
    const theMenuEle = theEle.querySelector('ul.DropDwonMenu');
    theMenuEle.querySelectorAll('li').forEach((item) => {
      const levelNum = util.toUtil(item.textContent);
      item.addEventListener('click', () => {
        onDeficulatyPick(levelNum);
        theEle.querySelector('a#difficultyLev strong').textContent = ` ${item.textContent}`;
        theMenuEle.classList.toggle('visable');
        const gameBoard = document.querySelector('body main section article#gameSection');
        if (levelNum < 6) {
          if (!gameBoard.classList.contains('lowItems')) {
            gameBoard.classList.toggle('lowItems');
          }
        } else {
          if (gameBoard.classList.contains('lowItems')) {
            gameBoard.classList.toggle('lowItems');
          }
        }
      });
    });
    theEle.querySelector('a#difficultyLev').addEventListener('mouseover', () => {
      theMenuEle.classList.toggle('visable');
    });
    theContanier.appendChild(theEle);
  }

  cleanUiGameDeck() {
    document.querySelector('body main article#gameSection').innerHTML = '';
  }

  drawCard(card, cardClassType, onUserPickCallBack) {
    const cardEle = document.createElement('section');
    cardEle.classList.add('cardItem');
    cardEle.classList.add(`card-${cardClassType}`);
    cardEle.id = `card-${card.id + cardClassType}`;
    cardEle.innerHTML = `<section class="card-down">
                                    <section class="card-up">
                                        <img src=${card.image}>
                                        <h3>${card.name}</h3>
                                    </section>
                             </section> 
                            `;

    cardEle.addEventListener('click', () => {
      onUserPickCallBack(card.id + cardClassType);
    });
    document.querySelector('body main section article#gameSection').appendChild(cardEle);
  }

  exposeCard(cardId) {
    const cardUpElement = document.querySelector(`#card-${cardId} .card-up`);
    if (cardUpElement) {
      cardUpElement.classList.toggle('expose');
    }
  }

  async updateProgBar(progPrecent) {
    const progBarEle = document.querySelector('body main section#gameContainer div.progBarContainer div.progBar');
    let width = progPrecent - 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= progPrecent) {
        clearInterval(id);
      } else {
        width++;
        progBarEle.style.height = width + '%';
        progBarEle.textContent = String(width).slice(0, 3) * 1 + '%';
      }
    }
  }

  onPair(card1Id, card2Id) {
    const a = document.querySelector(`body main article#gameSection div.cardItem#card-${card1Id}`);
    const b = document.querySelector(`body main article#gameSection div.cardItem#card-${card2Id}`);
    const d = a.cloneNode(true);
    const c = b.cloneNode(true);
    b.replaceWith(c);
    a.replaceWith(d);
  }

  onGameEndDialog() {
    const container = document.querySelector('body main section#gameContainer section.endGameDialog');
    container.classList.toggle('expose');
  }
}

const drawMatchingGame = new DrawMatchingGame();
export default drawMatchingGame;
