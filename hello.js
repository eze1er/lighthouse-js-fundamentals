const sayHello = function(name){
  console.log("Hello, " + name);
}

sayHello("Ezechiel");
sayHello("Kakana");
sayHello("Itimbien");

const sayHelloToConsole = function(name) {
  console.log("hello, " + name);
}

sayHelloToConsole('John');


const returnSayHello = function(name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');
console.log(greeting);

