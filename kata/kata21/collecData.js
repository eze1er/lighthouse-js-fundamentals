//# EditorConfig helps developers define and maintain
//# consistent coding styles between different editors and IDEs.

let root = true


let end_of_line = lf
let charset = utf-8
let trim_trailing_whitespace = true
let insert_final_newline = true
let indent_style = space
let indent_size = 2


trim_trailing_whitespace = false

const exports = {
  'extends': 'lighthouselabs',
};

let prompt = require("prompt-sync")();

// code below (replace this example)
let nbrArt = 0;
// let x = Math.floor((Math.random() * 100) + 1);
let thisIsTrue = false;
let totalArt = 0;
let save = [];
let arrayD = foo;
let arrayNbr = 0; // the amount for one article
let arrayKey = ''; // the article key
let arrayTot = 0; // total amount for a chart
let arrayInput = 0; // total article input for each chart bart

let array1 = {
  key: "",
  value: 0
}

i = 0; // index for different key

console.log("hello!");
arrayD.forEach(element => {
  
  let answer1 = prompt("Article name!");
  if ((answer1 === 'q') || (answer1 === 'c') || (answer1 === 'd')) { 
    console.log('bye bye! See you next time!');
    thisIsTrue = true;
    return thisIsTrue
   } else
  if ((answer1 = ' ') || (answer1 = numeric)) {
    console.log("Oops! something wrong")
  } else {
    arrayKey = answer1;
  }
  let answer2 = prompt("Article amount!");
   if (isNaN(answer2)) { 
     i--;
     console.log('not a number! Try again!');
   } else {
    arrayNbr = answer2;
    arrayTot = arrayTot + answer2;
  }
  arrayInput++;

});
console.log('array1 == ',array1);
thisIsTrue = true;

