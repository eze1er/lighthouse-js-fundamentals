
const range = function (start, end, step) {

  var some_array = [];

  // check for undefined elements
  if (start === undefined || end === undefined || step === undefined) {
    
    return [];
  }
  else if ( start > end){
    
    return [];
  }
  else if (step <= 0) {
    
    return [];
  }
  // here start the loop

  else {
      for ( var i = start; i <=  end; i = i + step) {

      some_array.push(i);

  }
}
  return  some_array;
  
}

range(-5, 2, 3);
console.log(range(-5, 2, 3));

