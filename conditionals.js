
const raining = true;
const cold = false;


if (raining){
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}


if (cold) {
  console.log("make sure you pick out a scarf!");

} else {
  console.log("Short sleeves are fine.");
}

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");    
  } else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
  } else {
    console.log("Short sleeves are fine.");
  }
  
  console.log("Now you're ready to go outside!");

  const IsCitizen = true;
  const age = 26;

  if (IsCitizen && age > 18) {
    console.log("You are eligible to vote.");
  }

  if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea...");

  }

  if (!raining) {
    console.log("Leave your umbrella at home!");
  }

var time = 60;

while ( time >= 0) {
    if (time === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else if ( time === 6) {
        console.log("Main engine start");
    }
    else if ( time === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if ( time === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if ( time === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if ( time === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else {
    console.log("T-"+time+" seconds");
   }
        time = time - 1;
}



  //  end  here
