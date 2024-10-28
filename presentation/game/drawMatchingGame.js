
class DrawMatchingGame{
    constructor(){

    }

    /*
    will add a card element to our deck UI with the matched css class according to its type
    note :
     * will build a dynamic grid while applying matched id to each HTML item according to the object send to it (to gain controll over it)
    */
    drawCard(card,cardClassType,onUserPickCallBack){
        const cardEle = document.createElement("div");
        cardEle.classList.add("cardItem");
        cardEle.classList.add(`card-${cardClassType}`);
        cardEle.id = `card-${card.id+cardClassType}`;
        cardEle.innerHTML = `<img src=${card.image}>
                             <h3>${card.name}</h3>
                             <div class=card-${cardClassType}><div/>   
                             `;

        cardEle.addEventListener("click",()=>{onUserPickCallBack(card.id+cardClassType)});

        document.querySelector('body main article#gameSection').appendChild(
            cardEle
        );     
            
    }

    exposeCard(cardId){
        const theEle = document.querySelector(`body main article#gameSection div.cardItem#card-${cardId} div`);  
        theEle.classList.toggle("expose")
    }

}

const drawMatchingGame = new DrawMatchingGame();
export default drawMatchingGame;