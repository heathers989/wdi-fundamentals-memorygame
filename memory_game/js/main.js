console.log("Up and running!");


//create array for cards
const cards = ["queen", "queen", "king", "king"];
//remove variables
//create empty array for cards in play
const cardsInPlay = [];

//create a variable for first card flipped
var cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}
else {
alert ("Sorry, try again.");
}

