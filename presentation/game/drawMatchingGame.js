
class DrawMatchingGame{
    constructor(){

    }

    /*
    will add a card element to our deck UI with the matched css class according to its type
    note :
     * will build a dynamic grid while applying matched id to each HTML item according to the object send to it (to gain controll over it)
    */
    drawCard(card,cardClassType,onUserPickCallBack){
        const cardEle = document.createElement("section");
        cardEle.classList.add("cardItem");
        cardEle.classList.add(`card-${cardClassType}`);
        cardEle.id = `card-${card.id+cardClassType}`;
        cardEle.innerHTML = `<section class="card-down">
                                    <section class="card-up">
                                        <img src=${card.image}>
                                        <h3>${card.name}</h3>
                                    </section>
                             </section> 
                            `;

        cardEle.addEventListener("click",()=>{onUserPickCallBack(card.id+cardClassType)});
        document.querySelector(".matching-game").appendChild(cardEle);
    }

    exposeCard(cardId) {
        const cardUpElement = document.querySelector(`#card-${cardId} .card-up`);
        if (cardUpElement) {
            cardUpElement.classList.toggle("expose");
        }
    }

}

const drawMatchingGame = new DrawMatchingGame();
export default drawMatchingGame;