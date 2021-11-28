const _ = require('lodash');

const numbers = [35,46,76,44,32,3];

_.each(numbers, function(number, i){
  console.log(number);
})