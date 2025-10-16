/*
    Challenge 3: Search in an Array
Write a program that asks the user to enter 8 integers, then another number to search for.
The program should indicate whether the number is present and at which position.
*/

let i, arr=[];

const prompt = require('prompt-sync')();
let size = Number(prompt("enter the size of the array : "));

if(size < 8 || size > 8) {console.log("invalid size please enter 8 elements!"); }

for(i = 1; i <= size; i++){
    if(size == 8){
    let element = prompt(`enter the element ${i}: `);
    arr.push(element);
    }
}