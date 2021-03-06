
const talkingCalendar = function(date) {
  // Your code here

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var month =   '';
  var newDay  =   '';
  var newYear = '';

// parse the string date to 2021/10/21 to '2021', '10', '21'

  var partsDate = date.split('/');

      newYear = partsDate[0];
      newDay  = partsDate[2];
      month   = partsDate[1];

  // to convert string in numeric
  
  var monthNum = parseInt(month, 10);
  var newDayNum = parseInt(newDay, 10);

  // loop for to change  month

  for (let i = 0; i < 12 ; i++) {
    var y = i + 1;
      if (monthNum === y) {
        month = months[i];
        month += ' ';
       }
     }
// loop for to change day

  if (newDayNum < 10) {
     newDay = newDay.slice(1);
   }
  if (newDayNum % 10 === 1) {
    if (newDayNum != 11) { 
       newDay += 'st, ';
       } else newDay +='th, ';
  } else if (newDayNum % 10 == 2) {
    if (newDayNum !== 12) {
       newDay += 'nd, ';
     } else newDay +='th, ';
  } else if (newDayNum % 10 == 3) {
    if (newDayNum !== 13) {
       newDay += 'rd, ';
     } else newDay +='th, ';
  } else newDay +='th, ';

  return (month + newDay + newYear)

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


