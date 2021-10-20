const conditionalSum = function(values, condition) {

  // Your code here
  let i = 0;
  let result = 0;
  console.log("value[cond]  ==  " + condition);
  while (i < values.length) {
    if (values[i] % 2) {
      if (condition === "odd") {
        result = result + values[i];
        i++;
      }
      else 
        i++;
    }
    else 
    if (condition === "even") {
        result = result + values[i];
      i++;
    }
    else i++;
}
  return result
};

//console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
//console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
 console.log(conditionalSum([], "odd"));

