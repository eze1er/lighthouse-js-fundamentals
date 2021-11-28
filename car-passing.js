const carPassing = function (cars, speed) {
  // Your code in here ...
  
  var newCars = [
    { 
      time: "",
      speed: ""
     }
  ];
// for to use the element from an object
  let cars1 = (Object.values(cars)); 
  let data1 = Array.from(cars1);

  for (let i = 0; i < data1.length; i++) {  
// .push an array in object
      newCars.push({
        time: data1[i].time,
        speed: data1[i].speed
      });
  }
  // create a new array. Date.now() is a function for exact time

  let newObject = {time: Date.now(), speed: speed};
  newCars.push(newObject);
  newCars.shift();

   return newCars 
};

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed);
