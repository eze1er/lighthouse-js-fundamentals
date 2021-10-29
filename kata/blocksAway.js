
const blocksAway = function(directions) {
  // Put your solution here

   // direction is the value of directions from function
  let direction = (Object.values(directions)); 
  let dl = direction.length;
  let data1 = Array.from(directions);

  var result = {
    east: 0,
    north: 0,
  }

    var x = 0; // left hand
    var y = 0; // right hand
    var face = ''; // face of taxicab

  for (let i = 0; i < dl; i = i + 2) {
  
    if (direction[i] === "left") {
      if ((i === 0) || (x === 0))  {
        face = 'north';
        x = x + (direction[i+1]);
      } 
      else 
      if ((y === 0) && (face === 'north')) {
        x = x + (direction[i+1]);
        face = 'north';
  
      } else
      if (face === 'north') {
        y = y - (direction[i+1]);
        face = "west";

      } else 
      if (face === 'west') {
        x = x - (direction[i+1]);
        face = 'south';
  
      } else
      if (face === 'south') {
        face = "east";
        y = y + (direction[i+1]);
 
      } else 
      if (face === 'east') {
        face = 'north';
        x = x + (direction[i+1]);
      }
         
    } 
    else
    if (direction[i] === "right") {
      if ((i === 0) || (y === 0))  {
        face = 'east';
        y = y + (direction[i+1]);
      } else 
      if ((y === 0) && (face === 'north')) {
        face = 'east';
        y = y + (direction[i+1]);

      } else
      if (face === 'north') {
        face = "east";
        y = y + (direction[i+1]);
      } else 
      if (face === 'west') {
        face = 'north';
        x = x + (direction[i+1]);
      } else
      if (face === 'south') {
        face = "west";
        y = y - (direction[i+1]);

      } else 
      if (face === 'east') {
        face = 'south';
        x = x - (direction[i+1]);
      }
    }
  }
    result.north = x;
    result.east = y;
    return result
};


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
