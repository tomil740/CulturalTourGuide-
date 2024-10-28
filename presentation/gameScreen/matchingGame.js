document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.querySelector('.matching-game');
    const numberOfCards = 16; 

    function createCard() {
        const card = document.createElement('section');
        card.classList.add('card-down');
        
        const img = document.createElement('img');
        img.src = 'card.webp';
        img.alt = 'Card';
        
        card.appendChild(img);
        return card;
    }

    function populateCards(number) {
        mainSection.innerHTML = '';
        for (let i = 0; i < number; i++) {
            mainSection.appendChild(createCard());
        }

        const cols = Math.ceil(Math.sqrt(number));
        mainSection.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        mainSection.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
    }

    populateCards(numberOfCards);
});
