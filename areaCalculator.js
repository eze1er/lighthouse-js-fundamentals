
// the first function, rectagle area

function calculateRectangleArea(length, width) {

  if (length < 0 || width < 0) {
    return undefined;
  }
  else
    return  length * width;
}
const rectangleArea = calculateRectangleArea();
console.log(rectangleArea);

// the next function, triangle
function calculateTriangleArea(base, height) {

  if (base < 0 || height < 0) {
    return undefined;
  } else
   return (base * height) / 2;
}
 const triangleArea = calculateTriangleArea();
 console.log(triangleArea);

 // the last for the circle
const calculateCircleArea = function (radius) {

  if (radius < 0) {
    return undefined;
  }
  else 
  return Math.PI * radius * radius;
}
const circleArea = calculateCircleArea();
console.log(circleArea);
