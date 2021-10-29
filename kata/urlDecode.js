const urlDecode = function (text) {
  // Put your solution here

  let urlcode = {};

  let data1 = text.replace(/%20/g, " ");
  let tmp = []; // prep work zone.
  let key1 = []; // first key storage
  let key2 = []; // key nbr 2
  let value1 = []; // prep work for value 
  let value2 = []; // prep work for value for second key.
  let keyIndex = 0; // check for first key.

   for (let i = 0; i < data1.length; i++) {
    if (data1[i] === "=" ) {
      if (keyIndex === 0) {
        key1 = tmp.join('');
        //console.log(`----${temp}`)
        //urlcode[temp][0] = tempV;
        tmp = [];
        keyIndex = 1;
      } 
      else
      if (keyIndex === 2) {
        key2 = tmp.join('');
        tmp = [];
        keyIndex = 2;
      } 
    } else 
    if (data1[i] === "&") {
      keyIndex = 2;
      value1 = tmp.join('');
      tmp = [];
    } else 
    if (i === data1.length - 1) {
      tmp.push(data1[i]);
      if (keyIndex === 2) {
        value2 = tmp.join('');
        urlcode[key1] = value1;
        urlcode[key2] = value2;
      } else
        value1 = tmp.join('');
        urlcode[key1] = value1;
      
    } else 
    tmp.push(data1[i]);
  } 
  return urlcode;     
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);