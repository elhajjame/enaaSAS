const prompt = require('prompt-sync')();

let input = prompt("enter the number of the element: ");
let i;
let arr = []; // empty array for storing all the inputs.

for(i = 1; i <= input; i++){
    
    let element = prompt(`element ${i}: `);
    arr.push(element); // here I used push method to add the numbers that the user enterd to element
}
console.log("array valus is: ", arr);
console.log("revars number : ", arr.reverse());