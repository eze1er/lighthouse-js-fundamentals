const instructorWithLongestName = function(instructors) {
  // Put your solution here

  var i = 0; // index for instructors elements
  var result = 0;
  var x = 0;

  for (const element of instructors) {
    let instruct = (Object.values(instructors[i])); 
 
    let data1 = Array.from(instruct[0]);
 
    if (data1.length > result) {
      result = data1.length;
      x = i;
      i++;
    }
    else 

    i++;
  }

  return instructors[x];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

