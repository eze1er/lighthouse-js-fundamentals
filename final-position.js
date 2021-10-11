
const moves =  ['north', 'north', 'west', 'west', 'north', 'east','north'];
// const moves =  ['east', 'east', 'east', 'east', 'west', 'west', 'south'];
// const moves =  ['south', 'south', 'south', 'south', 'south', 'north', 'south', ];

let finalPosition = function (moves) {

  var p = moves.length - 1;
  let x = 0;
  let y = 0;
  
  let positA = (x);
  let positB = (y);
  

for (let i = 0; i <= p; i++) {

  if (moves[i] === 'north') {
    y++;
    console.log("north  " + y);
   
  }
  else if (moves[i] === 'south') {
    y--;
    console.log("south  " + y);
  }
  else if (moves[i] === 'east') {
    x++;
    console.log("east  " + x);

  }else if (moves[i] === 'west') {
    x--;
      console.log("west  " + x);
  }
  else return false;

  }

if (positA < 0){

  positA = x.toString(2);
}  else {
  positA = x.toString();
}
if (positB < 0) {
  positB = y.toString(2);
} else { 
       positB = y.toString();}

  return [positA, positB]

}

const result = finalPosition(moves);

 console.log(result[0] + ', ' + result[1]);

