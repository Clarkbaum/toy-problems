var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};
//currently passes all but the last test that seems to test the randomness
//not sure how to fix this last test
var shuffleDeck = function(deck) {
  console.log("deck", deck);
  var output = [];
  var usedNum = [];
  while(usedNum.length < 52){
    var randomNum = Math.floor(Math.random() * (52 - 0)) + 0;
    if(usedNum.indexOf(randomNum) === -1){
      usedNum.push(randomNum);
      output.push(deck[randomNum])
    }
  }
  console.log("output", output)
  console.log("usedNum", usedNum)
  
  return output;
  
}