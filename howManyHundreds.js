var num = 1000;
var howManyHundreds = function (num) {
  let result = num % 100;
  var resultat = num - result;
  var resultOut = resultat/100;

  return resultOut
}
const finalresult = howManyHundreds();
console.log(howManyHundreds);

