
const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...

   var winner = " ";
   var metric1 = 0;
// for to use the element from an objectnano 

  let veget   = (Object.values(vegetables)); 
  let data1 = Array.from(veget);
  for (let i = 0; i < data1.length; i++) {
    if (data1[i][metric] > metric1) {
      winner = data1[i].submitter;
      metric1 = data1[i][metric] ;
    }
      
  }
  console.log('result == ', winner)
  return winner
}
  const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

judgeVegetable(vegetables, metric);