/*
    Challenge 6: Power using while loop
    Write a program that calculates the power of a number (base > 0, exponent ≥ 0) using a while loop.
    Example: 2³ = 8.
*/

const prompt = require('prompt-sync')();

let exponent, number; 
let result = 1;

number = prompt("enter a number : ");
exponent = prompt("enter the exponent : ");

while(exponent >= 0 )
{
    result = result * number;
   exponent--;
}
console.log(`${number} to the power of your exponent is: ${result}`);
