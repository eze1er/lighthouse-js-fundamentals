let prompt = require("prompt-sync")();

// code below (replace this example)
let nbr = 0;
let x = Math.floor((Math.random() * 100) + 1);
let thisIsTrue = false;
let str = 0;
let save = [];
let lt = 25; // this is the limit number I choose for stop the gammer if he don't find the random number

  for (let i =0; i < lt; i++) { 
    let answer = prompt("replace a number between 1 to 100: ");
  if ((answer === 'q') || (answer === 'c') || (answer === 'd')) { 
    console.log('bye bye! You try '+nbr+' times');
    thisIsTrue = true;
    return thisIsTrue
  }
  else
    if (isNaN(answer)) { 
      i--;
      console.log('not a number! Try again!');
    } 
    else { 
      answer = parseInt(answer);
      str = 0;
      save.forEach(element => {
        element = parseInt(element);
        if (answer === element) {
          str = 1;
        }
      });
    
      if (str === 1) { 
        console.log('Already replaceed! !'); 
      } 
      else 
      { 
        save.push(answer);
      if (answer === x) {
        nbr++;
        console.log("You got it! You took "+ nbr+" attempts!");
        i = lt;
        thisIsTrue = true;
      } else
      if (answer < x) {
        nbr++;
        save.push(answer);
        console.log('Too Low!');
     } else 
     if (answer > x) {
       nbr++;
       save.push(answer);
       console.log('Too high!');
     }
    } 
  }
    // if the game have a limitation number in this example we choose to lite after 25 times
  if (i === lt-1) {
    console.log('bye bye! You try '+nbr+' times')
    console.log('The number was = ', x);
    thisIsTrue = true
   }
}

