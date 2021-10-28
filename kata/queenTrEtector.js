  let length = 8;
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push([]);
    for (let j = 0; j < length; j++) {
      if (
        (whiteQueen[0] === i && whiteQueen[1] === j) ||
        (blackQueen[0] === i && blackQueen[1] === j)
      ) {
        arr[i].push(1);
      } else {
        arr[i].push(0);
      }
    }
  }
  console.log(arr);
  return arr
/*

const queenThreat = (board) => {
  let queen1, queen2;
  for (let i = 0; i < board.length; i++) {
    if (!queen1 && board[i].indexOf(1) !== -1) {
      queen1 = [i, board[i].indexOf(1)];
    }
    if (queen1 && board[i].indexOf(1) !== -1) {
      if (queen1[0] === i) {
        queen2 = [i, board[i].indexOf(1, queen1[1] + 1)];
      } else {
        queen2 = [i, board[i].indexOf(1)];
      }
    }
  }
  console.log(queen1, queen2);

  if (
    queen1[0] === queen2[0] ||
    queen1[1] === queen2[1] ||
    (queen1[0] === queen2[1] && queen2[0] === queen1[1])
  ) {
    return true;
  } else {
    return false;
  }
}; */