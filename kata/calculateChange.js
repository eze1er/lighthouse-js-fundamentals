const calculateChange = function(total, cash) {
    // Your code here
    const change = {};
    var changeX = 0;
    var cashBack = cash - total;

// operation for display the change

  while (cashBack  > 0) {
    if  (cashBack >= 2000) {
        changeX = cashBack / 2000;
        cashBack = cashBack - (~~changeX * 2000);
        changeX = Math.floor(changeX); 
        change.twentyDollar = changeX;
    } else 
    if  (cashBack >= 1000) {
        changeX = cashBack / 1000;
        cashBack = cashBack - (~~changeX * 1000);
        changeX = Math.floor(changeX); 
        change.tenDollar = changeX;
       } else 
    if  (cashBack >= 500) {
        changeX = cashBack / 500;
        cashBack = cashBack - (~~changeX * 500);
        changeX = Math.floor(changeX); 
        change.fiveDollar = changeX;
      } else 
    if  (cashBack >= 200) {
        changeX = cashBack / 200;
        cashBack = cashBack - (~~changeX * 200);
        changeX = Math.floor(changeX); 
        change.twoDollar = changeX;
      } else 
    if  (cashBack >= 100) {
        changeX = cashBack / 100;
        cashBack = cashBack - (~~changeX * 100);
        changeX = Math.floor(changeX); 
        change.oneDollar = changeX;
      } else 
    if  (cashBack >= 25) {
        changeX = cashBack / 25;
        cashBack = cashBack - (~~changeX * 25);
        changeX = Math.floor(changeX); 
        change.quarter = changeX;
      } else 
    if  (cashBack >= 10) {
        changeX = cashBack / 10;
        cashBack = cashBack - (~~changeX * 10);
        changeX = Math.floor(changeX); 
        change.dime = changeX;
      } else 
    if  (cashBack >= 5) {
        changeX = cashBack / 5;
        cashBack = cashBack - (~~changeX * 5);
        changeX = Math.floor(changeX); 
        change.nickel = changeX;
      } else 
    if  (cashBack >= 1) {
        changeX = cashBack;
        changeX = Math.floor(changeX); 
        change.penny = changeX;
        cashBack = 0;
    } 

    
 }
    return change
};
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));

