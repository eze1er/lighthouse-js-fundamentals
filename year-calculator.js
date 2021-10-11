
const ageCalculator = function () {
  const name = ['Suzie', 'Jack', 'Ali'];
  const yearOfBirth = ['1983', '2004', '2016'];
  const currentYear = ['2016', '2016', '2016'];
  let result = [];

  for (let i = 0; i < name.length; i++) {

    let yearOld = currentYear[i] - yearOfBirth[i];

    let year = yearOld.toString();

      result = result.concat(year);

  }
  console.log('NAME===>' +name);
  console.log('RESULT===>' + result);

 return {
   name: name,
   result: result,
 };
}
const resultat = ageCalculator();

console.log(resultat +'  <===resulta');
//for (let i of resultat) {
//console.log(resultat[i]);
//  console.log(resultat.name[i] +' is ' + resultat.result[i]+' year old.');
//}

