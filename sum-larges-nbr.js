
const sumLargestNumbers = function(data) {
  // Put your solution here

  let temp = [0, 0];

  for (let i = 0; i < data.length; i++) {

    if ((data[i] > temp[0]) || (data[i] > temp[1])) {
      var x = 0;
      if (temp[0] >= temp[1]) {
        x = 1;
      }
      else {
        x = 0;
      }
      temp.splice(x,1,data[i]);
    }
  
    var result = temp[0]+ temp[1];
  
  }
   return result
};

//console.log(sumLargestNumbers([1, 10]));
//console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
