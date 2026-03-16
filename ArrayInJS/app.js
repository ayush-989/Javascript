arr=[1,2,3,4,5];
console.log(arr);
console.log("First element:", arr[0]);
console.log("Length of array:", arr.length);    

// Array methods
arr.push(6);
console.log("After push:", arr);            

arr.pop();
console.log("After pop:", arr);

arr.shift();    
console.log("After shift:", arr);

arr.unshift(0);
console.log("After unshift:", arr);

console.log("Index of 3:", arr.indexOf(3)); 

for(let i = 0; i <5; i++) {
   for(let j = 0; j <=i; j++) {
         console.log("*");  
}

console.log("\n");
}

(function() {
    console.log("This is an IIFE");}    )() ;