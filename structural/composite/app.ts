import { Card } from "./card";
import { CardDeck } from "./card-deck";

let cardDeck = new CardDeck();
cardDeck.add(new Card("Card 1", 34, 56));
cardDeck.add(new Card("Card 2", 12, 22));

let secondDeck = new CardDeck();
secondDeck.add(new Card("Card 3", 21, 55));
secondDeck.add(new Card("Card 4", 28, 99));

cardDeck.add(secondDeck);
secondDeck.add(new Card("Card 5", 77, 100));

console.log(cardDeck.display());
