const multiplicationTable = function(maxValue) {
  // Your code here
  var x = maxValue;
  let arr1 = [];
  

  for (let i = 1; i <= x; i++) {
    var arr2 = [];
    var m = 1;

    for (let y = 1; y <= x; y++) {
      arr1 = i*m;
      arr2.push(arr1);
      m++;

    }
    var arr3 = arr2.join(' ');
    console.log(arr3);
  }
  return ' ';
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

