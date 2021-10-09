// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
emotions ("happy", function(num) {
 var sound = "";
 for (var x = 0; x < num; x++) {
     sound = sound + "ha";
 }
         sound = sound +"!";
    return sound;
}
 );  console.log(emotions(3));

