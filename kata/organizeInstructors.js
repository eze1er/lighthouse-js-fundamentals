const organizeInstructors = function(instructors) {
    // Put your solution here
    let organize = {};

    instructors.forEach(function(elem) {
        if (!organize[elem.course]) {
            organize[elem.course] = [];
            organize[elem.course].push(elem.name);
          }  else {
                organize[elem.course].push(elem.name);

            }
        });
        return organize
    };


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  
  {name: "Carlos", course: "Web"}
]));
