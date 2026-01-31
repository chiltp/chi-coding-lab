/*
Create a function cardCounter(card) that tracks a global count based on the card value and returns the count with a betting decision.
Rules:
- Add +1 for cards: 2, 3, 4, 5, 6
- Add 0 for cards: 7, 8, 9
- Add -1 for cards: 10, "J", "Q", "K", "A"
Return a string:
- "count Bet" if count > 0
- "count Hold" if count ≤ 0
*/

let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

// Test cases
console.log(cardCounter(6)); // "1 Bet"
console.log(cardCounter(9)); // "1 Bet"
console.log(cardCounter("A")); // "0 Hold"
console.log(cardCounter(7)); // "0 Hold"
console.log(cardCounter(10)); // "-1 Hold"
console.log(cardCounter("K")); // "-2 Hold"