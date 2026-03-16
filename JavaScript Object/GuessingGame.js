// const max = prompt("Enter the maximum number for the guessing game:");
// const random = Math.floor(Math.random()*max)+1;
// let guess = prompt("Enter your first guess:");
// while(true){
//     if(guess =="quit"){
//         console.log("Game Over");
//         break;
//     }
//     if(guess == random){
//         console.log("Congratulations! You guessed the number!");
//         break;
//     }
//     else if(guess < random){
//         console.log("Too low! Try again.");
//          guess = prompt("Enter your next guess:");
//     }   
//     else if(guess > random){
//         console.log("Too high! Try again.");
//          guess = prompt("Enter your next guess:");
//     }
   
// }

// function average(a, b, c){ 
//     return (a + b + c) / 3;
// }

// console.log(average(10, 20, 30));
//  console.log(average(5, 15, 25));


// function table (num){
//     for(let i = 1; i <= 10; i++){
//         console.log(i+"*"+num+"="+i*num);
//     }
// }

// table(5);
// table(7);

 

//  let sum= 0;
//  function addToSum(num){
//         for(let i = 1; i <= num; i++){
//             sum += i;
//         }
//         return sum;

//  }


//     console.log(addToSum(5));


// arrugment = ["Hello", "World", "JavaScript", "Programming", "Fun", "Learning", "Code", "Developer", "Software", "Engineer"];
// let final = "";
// function coces(arrugment){
//     for(let i = 0; i < arrugment.length; i++){

//     final += arrugment[i] + " ";
    
//     }
//    return final;
//     }

// coces(arrugment);
// console.log(final);

let a = parseInt(prompt("Enter a 1number :"));
let b = parseInt(prompt("Enter a 2number :"));

// if(a <= b){
//     for(let i = a; i <= b; i++){
//         console.log(i);
//     }
// }
// else
//     {
//     for(let i = a; i >= b; i--){
//         console.log(i);
//     }
// }
if(a < b){
for(let i = a; i <= b; i=i+2){
    document.write(i + "<br>");
}
}
 else if(b < a){
for(let i = b; i <= a; i=i+2){
    document.write(i + "<br>");
}
}
else if(a == b){
    document.write("Both numbers are equal: " );
}
// else if (a > b){
//     for(let i = b; i<=a; i=i*2){
//         console.log(i);
//     }
// }