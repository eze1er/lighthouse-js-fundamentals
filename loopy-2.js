function loopyLighthouse(range, multiples, words) {

  let startOfRange = range[0];
  let endOfRange = range[1];

  for (let numbers = startOfRange; numbers <= endOfRange; numbers++) {

    if (numbers % multiples[0] === 0 && numbers % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    }

    else if (numbers % multiples[0] === 0) {
      console.log(words[0]);
    }

    else if (numbers % multiples[1] === 0) {
      console.log(words[1]);
    }

    else
      console.log(numbers);
  }

}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
