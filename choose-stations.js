
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre',45, 'community centre']
];

const chooseStations = function (stations) {

  const goodStations = [];

  for (const station of stations) {

    const capacity = stations[1];
	console.log("capacity = "+capacity);    
    if (capacity >= 20) {
      const type = stations[2]
      if (type === "school" || type === "community centre") {
	console.log("push 100");  
      goodStations.push(stations[0]);
	
      } else 
	console.log("Past 1");

    } console.log("Past 2");

  } console.log("past 3");

//  console.log(goodStations);
  return goodStations;
}
console.log(chooseStations(stations));

