
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38


const carPassing =  function(cars, speed){
var newcar = {};
var newtime = Date.now();
 Object.assign(newcar, {
    [speed]: data
});
 Object.assign(newcar, {
    [newtime]: data
 });
    
     return { newcar } 
    
}; 

//console.log(JSON.parse(JSON.stringify(cars)));
var carsM = Object.assign(cars, carPassing(cars, speed));

console.log(JSON.parse(JSON.stringify('========' + carPassing(cars, speed))));
 
 //console.log({cars} +'new car');

 console.log(JSON.parse(JSON.stringify(carsM)));

 
