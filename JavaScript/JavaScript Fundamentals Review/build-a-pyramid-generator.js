/*
Write a function that takes in three parameters: a string pattern, a number of rows, and a boolean inverted. The function should return a string that represents a pyramid made out of the pattern. If inverted is true, the pyramid should be upside down.
Example:
pyramid("o", 5, false) should return:
    o
   ooo
  ooooo
 ooooooo
ooooooooo

pyramid("x", 3, true) should return:
xxxxx
 xxx
  x
*/

function pyramid(pattern, rows, inverted) {
    // Initialize an empty string to build the pyramid
    let result = "\n";
    // Loop through each row to construct the pyramid
    for (let row = 0; row < rows; row++){
        // Determine the current row index based on whether the pyramid is inverted
        let currentRow;
        if (inverted) {
            // For an inverted pyramid, the current row starts from the bottom and goes up
            currentRow = rows - row - 1;
        } else {
            // For a regular pyramid, the current row starts from the top and goes down
            currentRow = row;
        }
        // Calculate the number of spaces and pattern characters needed for the current row
        let spaces = rows - currentRow - 1;
        let patternCount = 2 * currentRow + 1;
        // Build the current row and add it to the result string
        result += " ".repeat(spaces) + pattern.repeat(patternCount) + "\n";
    }
    return result;
}

// Test cases
console.log(pyramid("o", 5, false));
console.log(pyramid("x", 3, true));