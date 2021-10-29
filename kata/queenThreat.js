// queenThreat
const generateBoard = function(whiteQueen, blackQueen) {

  var board = [];
  var prep = [];

  for (let x = 0; x < 8; x++) { 
    for (let y = 0; y < 8; y++) {

      if ((x === whiteQueen[0]) && (y === whiteQueen[1])) {
        prep.push(1);
      } else
      if ((x === blackQueen[0]) && (y === blackQueen[1])) {
        prep.push(1);
      } else {
        prep.push(0);
      }  
    }
   board.push(prep);
   prep = [];
  }

  return board
};

const queenThreat = function(generatedBoard) {
  if (
    (whiteQueen[0] === blackQueen[0]) || (whiteQueen[1] === blackQueen[1]) ||
    (whiteQueen[0] === blackQueen[1] && blackQueen[0] === whiteQueen[1])
  ) {
    return true;
  } else {
    return false;
  }
}
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));