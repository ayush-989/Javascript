//1. Variable Declarations (var, let, const)
let name = "Mohan";   // Declaration with 'let'
const age = 25;      // Declaration with 'const' (constant value)
var isActive = true; // Declaration with 'var' (older version)

//2. Assignment Statement
let number = 10; // Assigning a number
let message = "Hello, World!"; // Assigning a string

//3. Expression Statements
let y = 5;
x = y + 10;  // Expression statement
console.log(x); // Expression statement using a function call

//4. Control Flow Statements
let number1 = 10;
if (number1 > 5) {
    console.log("Number is greater than 5");
}

//5. Function Declarations
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Ayush"));

//6. Return Statement
function add(x1, y1) {
    return x1 + y1;
}
let result = add(5, 3); // result will be 8

//7. Throw Statemen
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
}

//8. Try...Catch Statement
try {
    let result = someUndefinedFunction(); // This will throw an error
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

//9. Switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's almost the weekend");
        break;
    default:
        console.log("It's a regular day");
}

//10. Continue Statements
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;  // swipe the loop when i equals 5
    }
    console.log(i);
}