let light = "red";
if(light == "green"){
    console.log("Go")
}
else if(light == "yellow"){
    console.log("Slow down")
}
else if(light == "red"){
    console.log("Stop")
}
else{
    console.log("Invalid light")
}

// using switch case
switch(light){
    case"green":
        console.log("Go")
        break;
    case"yellow":
        console.log("Slow down")
        break;
    case"red":
        console.log("Stop")
        break;
    default:
        console.log("Invalid light")
  
}

// using Switch print day of week
let day = 4 ;

switch(day){
    case 1 :
      console.log("Monday")
      break;
    case 2 :
      console.log("Tuesday")
      break;            
    
    case 3 :
      console.log("Webnesday")
        break;

     case 4:
      console.log("Thurday")
        break;
     case 5 :
      console.log("Friday")
        break;

    case 6 :
      console.log("saturday")
      break;
    case 7 :
      console.log("Sunday");
        break;
}