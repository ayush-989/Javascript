let num = 10;
console.log("Welcome to the Number Guessing Game!");
let guess = prompt("Guess a number between 1 and 20 :");
while((guess != num)&&(guess != "quit")){
   
  guess = prompt("Guess a number between 1 and 20 (or type 'quit' to exit):");
}
