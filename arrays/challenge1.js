const prompt = require('prompt-sync')();

let size = prompt("enter the size of the array: "); //here I choose to work with this method to ask the user of the size that he/she want/s
let i;
let arr = []; // empty array for storing all the inputs.

for(i = 1; i <= size; i++){
    
    let element = prompt(`element ${i}: `);
    arr.push(element); // here I used push method to add the numbers that the user enterd to element
}
console.log("array valus is: ", arr);
console.log("revars number : ", arr.reverse());