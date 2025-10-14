/*
    Even or Odd
Write a program that takes a number and displays whether it is even or odd.
*/
const prompt = require('prompt-sync')();



let number = prompt("enter a number: ");

if(number % 2 === 0)
{
    console.log(`${number} is even !`);
}else console.log(`${number} is odd !`);