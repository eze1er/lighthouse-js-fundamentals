
const lastIndexOf = function (arr1, value) {
// x is the variable i will keep the las index  
  var x = -1;

  for (let i = 0; i <= arr1.length; i++) {
     
     if (arr1[i] === value) {
       x = i;
     }
  }
  return x;
}
lastIndexOf([], 3);
console.log(lastIndexOf([], 3), "=?", -1);

