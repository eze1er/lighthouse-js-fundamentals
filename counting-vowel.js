const numberOfVowels = function(data) {
  // Put your solution here

  let data1 = Array.from(data);

  result = 0;

  let x = 0;
  while (x < data1.length) {
    if ((data1[x] === 'a') || (data1[x] === 'e') || (data1[x] === 'i')  || (data1[x] === 'o') || (data1[x] === 'u')) {

      result++;
      x++;
    
    }
    else x++;
  }
 return result;
};

console.log(numberOfVowels("orange"));
//console.log(numberOfVowels("lighthouse labs"));
//console.log(numberOfVowels("aeiou"));

