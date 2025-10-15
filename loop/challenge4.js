/*
    Challenge 4: Reverse an Integer
Write a program that asks for an integer and displays it reversed.
Example: input 12345 → output 54321.
*/

const prompt = require('prompt-sync')();

let reminder, revers = 0;


let number = prompt("enter a number: ");


while(number !== 0 ){

    reminder = number % 10;
    revers = revers * 10 + reminder;
    number = Math.floor(number / 10);  // Remove the last digit
}console.log(revers);