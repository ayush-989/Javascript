//Qs1.

let num = prompt("Enter a number:");
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}
// Qs2.
let name = prompt("What is your name?");
let age = prompt("What is your age?");
alert(`${name}, is ${age}  years old`);

// Qs3.
let Qutar = prompt("Enter the number of quarters:");
switch(Qutar){
    case"1":
        console.log("January", "February", "March");
        break;
    case"2":
        console.log("April", "May", "June");    
        break;
    case"3":
        console.log("July", "August", "September");
        break;
    case"4":
        console.log("October", "November", "December");
        break;
    default:
        console.log("Invalid quarter number. Please enter a number between 1 and 4.");
}

// Qs4.
var goldenString = prompt("Enter a string:");
if ( (goldenString[0]=='a' || goldenString[0]=='A')&& goldenString.length >= 5 ){
        console.log("The string is a golden string.");

    }
else{
        console.log("The string is not a golden string.");
    }

// Qs5.
let number1 = prompt("Enter a first number:");
let number2 = prompt("Enter a second number:");
let number3 = prompt("Enter a third number:");
if (number1 > number2 && number1 > number3) {
    console.log("The largest number is: " + number1);
}
if(number2>number1 && number2>number3){
    console.log("The largest number is: " + number2);
}
else{
    console.log("The Largest number is :"+number3);
}

/// Qs6.
let num1 = prompt("Enter a first number:");
let num2 = prompt("Enter a second number:");
let lastDigit1 = num%10;
let lastDigit2 = num2%10;
if(lastDigit1==lastDigit2){
    console.log("The last digits are the same.");   
}