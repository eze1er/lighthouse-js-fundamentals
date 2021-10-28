const makeCase = function(input, cases) {
  // Put your solution here

/*
var obj = { prop1 : "some val", prop2 : "some other val"};

for(key in obj){

console.log("Key: ", key)

console.log("Value: ", obj[key])

} */

var array1 = input.split(' ');

Object.keys(array1).forEach((cases)=>{

console.log("For Each Key: ", cases)

console.log("For Each Value: ", array1[cases])

});
 
};
// we can read https://www.reddit.com/r/javascript/comments/8emf94/forin_vs_objectkeys/

/* var myObj = {foo: "bar", baz: "baz"};
Object.values(myObj).map((val) => {
console.log(val);
}) */

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));