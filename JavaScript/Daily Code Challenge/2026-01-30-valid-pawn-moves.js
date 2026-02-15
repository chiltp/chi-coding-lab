/*
Write a function pawnMoves(position) that returns all valid squares a pawn can move to, in ascending order.
Rules:
- The board is 8×8 (A1 to H8)
- You play from the bottom (pawn moves up)
- Normally, a pawn moves 1 square up
- If the pawn is on row 2, it can move 1 or 2 squares up
- Example:
  - "D4" → ["D5"]
  -"B2" → ["B3", "B4"]
*/

function findPawnMoves(position) {
  const column = position[0];
  const row = Number(position[1]);
  const moves = [];
  moves.push(`${column}${row + 1}`);
  if (row === 2) {
    moves.push(`${column}${row + 2}`);
  }
  return moves;
}

// Test cases
findPawnMoves("D4"); // ["D5"]
findPawnMoves("B2"); // ["B3", "B4"]
findPawnMoves("A7"); // ["A8"]
findPawnMoves("H2"); // ["H3", "H4"]