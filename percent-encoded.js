const urlEncode = function(text) {
  // Put your solution here

  let text1 = (Object.values(text)); 
   let data1 = Array.from(text1);


  if (data1[0] === ' ') {
    data1 = data1.slice(1);
  };

  if (data1[data1.length-1] === " ") {
    data1.pop();
  };
  
  for (let i = 0; i < data1.length; i++) {
    if (data1[i] === ' ') {
       data1[i] = data1[i].replace(/ /g,"%20");
    } 
  }
  var data2 = data1.join("");
  return data2;

} 

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

