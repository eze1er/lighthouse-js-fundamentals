
// sort two arrays.

const merge = function (arr1, arr2) {
  var arr3 = arr1.concat(arr2);

  arr3.sort(arr3);
  return arr3;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
