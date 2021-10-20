const checkAir = function (samples, threshold) {
  // Code here!
var todirty = 0;
var x = 100/samples.length;
let status = [];

for (let i = 0; i < samples.length; i++) {
  if (samples[i] === 'dirty') {
    todirty++;

  }

}
 todirty = (todirty * x)/100
  if (todirty > threshold) {
    return "Polluted";
  } else
    return "Clean"
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

