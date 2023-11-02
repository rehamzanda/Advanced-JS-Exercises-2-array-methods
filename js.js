const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, diamonds, spades
for(let value=1; value<=13; value++)// we created 13 cards
 cards.push({ suit, value })// we gave 13 card for each suit, now we have an object of cards
 cards.filter(c => c.value === 2)


function cardToString(c) {
const suits  = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
// here we defined an object that its index is the suit and the value is string which is the img of each suit
const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
// here we gave a special values for the special cards, J,Q,K,A also as an object 
     for(let i=2; i<=10; i++) values[i] = i;
    //here we gave rest cards values as numbers 2,3,4,5,{1:1,2:2,3:3..}
     return values[c.value] + suits[c.suit];
    //here we said get the value of the index c.value
    //where c is the inserted object which is cards here 
    //get the value that we refer to from the filter method 
    // c.value>10 ==> 11,12,13 ==> the value of them is=> J,Q,K
    //the c.suit === H => the value of H which is '\u2665'
  }

 console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString)
 )// map and filter—allows you to provide a function that controls the outcome

