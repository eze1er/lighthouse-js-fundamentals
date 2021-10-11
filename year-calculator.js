
const name = ["Ezechiel"];
const yearOfBirth = [1962];
const currentYear = [2021];

const ageCalculator = function () {

  let result = [];

  for (let i = 0; i < name.length; i++) {

    let yearOld = currentYear[i] - yearOfBirth[i];

    let year = yearOld.toString();

      result = result.concat(year);

  }
  console.log('NAME===>' +name);
  console.log('RESULT===>' + result);

 /*return {
   name: name,
   result: result,
 }; */
}

console.log(ageCalculator("Miranda", 1983, 2015));

