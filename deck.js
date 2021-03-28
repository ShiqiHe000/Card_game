const SUITS = ['♥', '♦', '♠', '♣'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards(){
        return this.cards.length;
    }

    shuffle(){
        for(let i = this.numberOfCards - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));

            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    pop() {
        return this.cards.shift();
    }

    push(card) {
        this.cards.push(card);
    }
}

export class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }

    get color() {
        return this.suit === '&spades;' || '&clubs;' ? 'black' : "red";
    }

    getHTML() {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', this.color);
        cardDiv.innerText = this.suit;
        // cardDiv.dataset.value = this.value + ' ' + this.suit;
        cardDiv.dataset.value = `${this.value} ${this.suit}`;
        return cardDiv;
    }
}


function freshDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}