
  const urlDecode = function(text) {
    // Put your solution here
    let urlcode = {};
      
       let data1 = text.replace(/%20/g, ' ');
       var tmp = []; // prep work zone
      var keyIndex = 0; // check for first key.
      var keyTemp = [];
 
      for (let i = 0; i < data1.length; i++) {
    
        if ((data1[i] === '=') || (data1[i] === '&')){ 
          if (keyIndex === 0) {
            tmp.push(': ');
            tmp.toString();
            urlcode[0] = [];
            urlcode[0].push(tmp);

            tmp = [];
      
            keyIndex = 1;
            keyTemp = [];
// by here
          //  urlcode[key] = value;
// here

          } else
          if (keyIndex === 1) 
          {
            tmp.toString();
          //  urlcode[0] = [];
            urlcode[0].push(tmp);
            tmp = [];
            keyIndex = 2;
          } else
          if (keyIndex == 2) { 
             urlcode[0].push(', ');
             urlcode[0].push(tmp);
             urlcode[0].push(': ');
             tmp = [];
          }
               // keyTemp.toString();
        }
        else { 
          if (i === data1.length - 1) {
            tmp.push(data1[i]);
            urlcode[0].push(tmp);
            tmp = [];
          } else
            tmp.push(data1[i]);
        }
      }

      //var urlcode1 = urlDecode.shift();
      var urlcode1 = urlcode.concat();
      urlcode1.join(',');
      var urlcode2 = urlcode1.toString();
      let urlcode3 = urlcode2.replace(/,/g, '');
        console.log(urlcode3);
      return [urlcode3]
};
    
  console.log(urlDecode("duck=rubber"));
  console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
 console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
