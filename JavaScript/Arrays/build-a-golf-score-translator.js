/*
Write a function golfScore(par, strokes) that returns a nickname based on how many strokes were taken compared to par.
Rules:
- 1 → "Hole-in-one!"
- ≤ par - 2 → "Eagle"
- par - 1 → "Birdie"
- par → "Par"
- par + 1 → "Bogey"
- par + 2 → "Double Bogey"
- ≥ par + 3 → "Go Home!"
 */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

// Test cases
console.log(golfScore(3, 2)); // "Birdie"
console.log(golfScore(4, 1)); // "Hole-in-one!"
console.log(golfScore(4, 2)); // "Eagle"
console.log(golfScore(5, 2)); // "Eagle"
console.log(golfScore(4, 3)); // "Birdie"
console.log(golfScore(4, 4)); // "Par"
console.log(golfScore(4, 5)); // "Bogey"
console.log(golfScore(4, 6)); // "Double Bogey"
console.log(golfScore(4, 7)); // "Go Home!"