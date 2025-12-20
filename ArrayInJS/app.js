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