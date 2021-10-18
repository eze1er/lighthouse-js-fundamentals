
var bins = {
  Waste: 0,
  recycling: 0,
  compost: 0,
};
 const smartGarbage = function (trash,bins) {

   bins[trash]++;

  let newBins = "waste:  "+ bins.waste + "\nrecycling: " + bins.recycling + "\ncompost: " + bins.compost;

  console.log("BINS===" + newBins);
  
  return [newBins]
  
 };

 smartGarbage('recycling', { waste: 9, recycling: 8, compost: 3 });
