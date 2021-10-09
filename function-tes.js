function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
//	console.log(line); 
 }
	console.log(line);
  return line + "\n";
}

function buildTriangle(length) {
  
    var triangle = "";

   
    var lineNumber = 1;

    for(lineNumber=1; lineNumber<=length; lineNumber++){
     
     
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}


console.log(buildTriangle(10));

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
