const squareCode = function(message) {
  // Put your solution here

  var array1 = message.replace(/ /g,"");

  var y = array1.length;
  var x = (Math.ceil(Math.sqrt(y)));
  var msgArr = [];
  var msgArr1 = [];
  var message1 = [
    { 
      mgs: ""
     }
  ]; 

     var l = 0; // index for first secret message 
     let m = 0;
  
      for (let i = 0; i < y; i++) {

        if (array1[i] !== ' ') {
          msgArr.push(array1[i]);
          m++;

          if ((m === x) || (i === y-1)){
     
              message1.push(msgArr);
              msgArr = [];
              m = 0;
              l++;
          } 
          
        }
    
    }

       msgArr1 = []; 
       msgArr = [];
       l = 0;
       m = 0;
        
 
      // var c is for colum 
    for (let c = 0; c <= x; c++) {
      
      for (let i = 1; i < message1.length; i++) {
  
        let count = 0;

        // loop through each key/value
        for(let key in message1[i]) {
    
            ++count;
        }

        message1 = message1.filter(function( element ) {
          return element !== undefined;
       });
 
       
        if (message1[i][c] !== undefined) {
          msgArr1.push(message1[i][c]);
          m++;
          
          if (m === message1.length - 1) {
   
            msgArr.push(msgArr1);
            msgArr.push('%');
            msgArr1 = [];
            m = 0;
            l++;
          } 
        
        }
      } 
      if (m > 0) {
   
        msgArr.push(msgArr1);
        msgArr.push('%');
        msgArr1 = [];
        m = 0;
        l++;     
    
      } 
    }   
    var messageF = msgArr.toString();
    var result2 = messageF.replace(/,/g,"");
    var result = result2.replace(/%/g, ' ');
    
    return result
}  
 
    console.log(squareCode("chill out"));
    console.log(squareCode("feed the dog"));
    console.log(squareCode("have a nice day"));  
    console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
  
